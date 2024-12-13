export function extractDomain(url: string): string {
    try {
        const parsedUrl = new URL(url);
        const hostnameParts = parsedUrl.hostname.split('.');
        return hostnameParts[hostnameParts.length - 2];
    } catch (error) {
        throw new Error("Invalid URL");
    }
}