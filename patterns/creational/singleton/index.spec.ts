import { ConfigurationManager } from '.';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Singleton Pattern', () => {
  beforeEach(() => {
    ConfigurationManager.reset();
  });

  it('should return the same instance when getInstance is called multiple times', () => {
    const instance1 = ConfigurationManager.getInstance();
    const instance2 = ConfigurationManager.getInstance();

    expect(instance1).toBe(instance2);
  });

  it('should maintain state across different references', () => {
    const instance1 = ConfigurationManager.getInstance();
    const instance2 = ConfigurationManager.getInstance();

    instance1.setKey('environment', 'production');
    expect(instance2.getKey('environment')).toBe('production');
  });

  it('should have default configuration values', () => {
    const instance = ConfigurationManager.getInstance();

    expect(instance.getKey('environment')).toBe('development');
    expect(instance.getKey('debug')).toBe(true);
    expect(instance.getKey('apiUrl')).toBe('http://localhost:3000');
  });

  it('should return a copy of the configuration when getAllConfig is called', () => {
    const instance = ConfigurationManager.getInstance();
    const config = instance.getAllConfig();

    expect(config).toEqual({
      environment: 'development',
      debug: true,
      apiUrl: 'http://localhost:3000',
    });

    config.environment = 'production';
    expect(instance.getKey('environment')).toBe('development');
  });
});
