import BleScanner from '../BleScanner'

describe('Test BleScanner class functions', () => {
  describe('Test the BleScanner class', () => {
    it('Should scan for preipheral devices', async () => {
      const bleScanner = new BleScanner(console.log);
      const result = await bleScanner.discoverBleDevices();
      console.log(result);
    });
  });
});
