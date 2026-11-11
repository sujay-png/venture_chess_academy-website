export function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .trim();
}

export async function fetchRankMathSeo(post: any) {
  // 1. Direct Rank Math fields from WordPress REST API (if registered/exposed)
  let title = post.rank_math_title || post.meta?.rank_math_title || '';
  let description = post.rank_math_description || post.meta?.rank_math_description || '';
  let keywords = post.rank_math_focus_keyword || post.meta?.rank_math_focus_keyword || '';
  let canonicalUrl = post.link || '';

  // 2. Yoast / Head tags fallback if present
  if (!title && post.yoast_head_json?.title) title = post.yoast_head_json.title;
  if (!description && post.yoast_head_json?.description) description = post.yoast_head_json.description;
  if (!canonicalUrl && post.yoast_head_json?.canonical) canonicalUrl = post.yoast_head_json.canonical;

  // 3. Rank Math official headless REST endpoint (getHead)
  if (!title || !description || !keywords) {
    try {
      const permalink = post.link || `https://dashboard.venturechessacademy.com/${post.slug}/`;
      const rankMathUrl = `https://dashboard.venturechessacademy.com/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(permalink)}`;
      const res = await fetch(rankMathUrl);
      if (res.ok) {
        const data = await res.json();
        const head = data.head || '';
        if (head) {
          if (!title) {
            const titleMatch = head.match(/<title[^>]*>([^<]+)<\/title>/i);
            if (titleMatch) title = titleMatch[1];
          }
          if (!description) {
            const descMatch = head.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                              head.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
            if (descMatch) description = descMatch[1];
          }
          if (!keywords) {
            const kwMatch = head.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["']/i) ||
                            head.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']keywords["']/i) ||
                            head.match(/<meta[^>]*property=["']article:tag["'][^>]*content=["']([^"']*)["']/i);
            if (kwMatch) keywords = kwMatch[1];
          }
          const canonMatch = head.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                             head.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
          if (canonMatch && canonMatch[1]) canonicalUrl = canonMatch[1];
        }
      }
    } catch {
      // Gracefully fall back if network or getHead endpoint is unavailable
    }
  }

  // 4. Clean strings and apply intelligent fallbacks
  title = stripHtml(title) || `${stripHtml(post.title?.rendered || '')} | Venture Chess Academy`;
  description = stripHtml(description) || stripHtml(post.excerpt?.rendered || '').slice(0, 160);
  keywords = stripHtml(keywords);

  return {
    title,
    description,
    keywords,
    canonicalUrl,
  };
}
