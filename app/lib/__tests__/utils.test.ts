import { cn, scrollToSection } from '../utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('should merge Tailwind classes with proper precedence', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('should handle undefined and null values', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('should handle object notation', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });
});

describe('scrollToSection utility function', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Setup DOM
    document.body.innerHTML = '';
  });

  it('should scroll to element when found', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'test-section';
    const scrollIntoViewMock = jest.fn();
    mockElement.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(mockElement);

    scrollToSection('test-section');

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('should not throw error when element not found', () => {
    expect(() => scrollToSection('non-existent')).not.toThrow();
  });

  it('should handle empty string', () => {
    expect(() => scrollToSection('')).not.toThrow();
  });
});
