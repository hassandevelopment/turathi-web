// Prefix an internal, root-relative path with the site base so links work both
// at the site root (Cloudflare Pages) and under a subpath (the GitHub Pages
// preview at /turathi-web/). External URLs and anchors are returned untouched.
export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // "" at root, "/turathi-web" on GH Pages
  const clean = "/" + path.replace(/^\/+/, "");
  return base + clean;
}
