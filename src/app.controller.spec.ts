import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  let authService: AuthService; // tslint:disable-line

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService, authService);
  });

  describe('findAll', () => {
    it('should return "Pirate Stories"', () => {
      expect(appController.getHello()).toBe('Pirate Stories');
    });
  });
});
