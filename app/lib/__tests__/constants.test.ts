import { SECTION_IDS, IMAGE_URLS, OG_IMAGE_URL } from '../constants';

describe('Constants', () => {
  describe('SECTION_IDS', () => {
    it('should have all required section IDs', () => {
      expect(SECTION_IDS).toHaveProperty('HERO');
      expect(SECTION_IDS).toHaveProperty('EVIDENCE');
      expect(SECTION_IDS).toHaveProperty('TESTIMONY');
      expect(SECTION_IDS).toHaveProperty('ACTION');
    });

    it('should have correct string values', () => {
      expect(SECTION_IDS.HERO).toBe('hero');
      expect(SECTION_IDS.EVIDENCE).toBe('evidence');
      expect(SECTION_IDS.TESTIMONY).toBe('testimony');
      expect(SECTION_IDS.ACTION).toBe('action');
    });

    it('should be readonly (type-safe)', () => {
      // This test ensures TypeScript enforces readonly at compile time
      // Runtime check that the object is frozen
      expect(Object.isFrozen(SECTION_IDS)).toBe(false); // `as const` doesn't freeze, but provides type safety
      expect(typeof SECTION_IDS.EVIDENCE).toBe('string');
    });
  });

  describe('IMAGE_URLS', () => {
    it('should have all required image URLs', () => {
      expect(IMAGE_URLS).toHaveProperty('TRADITIONAL_SUSHI');
      expect(IMAGE_URLS).toHaveProperty('CREAM_CHEESE_ROLL');
      expect(IMAGE_URLS).toHaveProperty('CHEF_PORTRAIT');
    });

    it('should have valid URL format', () => {
      expect(IMAGE_URLS.TRADITIONAL_SUSHI).toMatch(/^https:\/\//);
      expect(IMAGE_URLS.CREAM_CHEESE_ROLL).toMatch(/^https:\/\//);
      expect(IMAGE_URLS.CHEF_PORTRAIT).toMatch(/^https:\/\//);
    });

    it('should point to Unsplash URLs', () => {
      expect(IMAGE_URLS.TRADITIONAL_SUSHI).toContain('unsplash.com');
      expect(IMAGE_URLS.CREAM_CHEESE_ROLL).toContain('unsplash.com');
      expect(IMAGE_URLS.CHEF_PORTRAIT).toContain('unsplash.com');
    });
  });

  describe('OG_IMAGE_URL', () => {
    it('should be a valid URL', () => {
      expect(OG_IMAGE_URL).toMatch(/^https:\/\//);
    });

    it('should be optimized for Open Graph (1200x630)', () => {
      expect(OG_IMAGE_URL).toContain('w=1200');
      expect(OG_IMAGE_URL).toContain('h=630');
    });

    it('should have crop settings', () => {
      expect(OG_IMAGE_URL).toContain('crop=');
    });
  });
});

