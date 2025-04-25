import { expect, describe, it, vi } from 'vitest';
import { ImageProxy, ImageViewer } from './index';

describe('Virtual Proxy Pattern', () => {
  describe('ImageProxy', () => {
    it('should not load real image until display is called', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const proxy = new ImageProxy('test.jpg');
      const viewer = new ImageViewer(proxy);

      expect(proxy.getWidth()).toBe(800);
      expect(proxy.getHeight()).toBe(600);
      expect(consoleSpy).not.toHaveBeenCalledWith('Loading image from disk: test.jpg');

      viewer.showImage();
      expect(consoleSpy).toHaveBeenCalledWith('Loading image from disk: test.jpg');
      expect(consoleSpy).toHaveBeenCalledWith('Displaying image: test.jpg');
    });

    it('should only load real image once', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const proxy = new ImageProxy('test.jpg');
      const viewer = new ImageViewer(proxy);

      viewer.showImage();
      viewer.showImage();

      expect(consoleSpy.mock.calls.filter((call) => call[0] === 'Loading image from disk: test.jpg')).toHaveLength(1);
    });

    it('should provide image dimensions without loading the full image', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const proxy = new ImageProxy('test.jpg');

      expect(proxy.getWidth()).toBe(800);
      expect(proxy.getHeight()).toBe(600);
      expect(proxy.getWidth()).toBe(800);
      expect(proxy.getHeight()).toBe(600);

      expect(consoleSpy).not.toHaveBeenCalledWith('Loading image from disk: test.jpg');
    });
  });
});
