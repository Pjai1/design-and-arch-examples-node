type Config = {
  environment: string;
  debug: boolean;
  apiUrl: string;
};

export class ConfigurationManager {
  private static instance: ConfigurationManager | undefined;
  private config: Config;

  constructor({ environment = 'development', debug = true, apiUrl = 'http://localhost:3000' }: Partial<Config> = {}) {
    this.config = {
      environment,
      debug,
      apiUrl,
    };
  }

  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager({});
    }
    return ConfigurationManager.instance;
  }

  public static reset(): void {
    ConfigurationManager.instance = undefined;
  }

  public getKey<K extends keyof Config>(key: K): Config[K] {
    return this.config[key];
  }

  public setKey<K extends keyof Config>(key: K, value: Config[K]): void {
    this.config[key] = value;
  }

  public getAllConfig(): Config {
    return { ...this.config };
  }
}
