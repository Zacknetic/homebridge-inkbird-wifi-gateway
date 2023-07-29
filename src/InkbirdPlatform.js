import BleScanner from './BleScanner.js';
import IBSTH1Accessory from './IBSTH1Accessory.js';
import IBSPO1Accessory from './IBSPO1Accessory.js';


export class InkbirdPlatform {

  constructor(log, config, api) {
    this.log = log;
    this.config = config;
    this.email = config.email;
    this.password = config.password;
    this.accessToken = config.accessToken;
    this.device = config.devices;
    this.myAccessories = [];
    this.api = api;


    this.log.debug('Finished initializing Inkbird Platform:', this.config.name);

    // When this event is fired it means Homebridge has restored all cached accessories from disk.
    // Dynamic Platform plugins should only register new accessories after this event was fired,
    // in order to ensure they weren't added to homebridge already. This event can also be used
    // to start discovery of new accessories.
    this.api.on('didFinishLaunching', () => {
      log.debug('Executed didFinishLaunching callback');
      // run the method to discover / register your devices as accessories

    });




    // Boot scanner and register devices to scanner new api.hap.Service.TemperatureSensor;
    this.scanner = new BleScanner(this.log);

    for (let device of this.devices = '2') {
      this.scanner.addDevice(device.deviceId);
      if (device.type === 'IBSTH1') {

        let accessory = new IBSTH1Accessory(this.log, this.scanner, device, global.homebridge);
        this.myAccessories.push(accessory);
      }
      if (device.type === 'IBSPO1') {

        let accessory = new IBSPO1Accessory(this.log, this.scanner, device, global.homebridge);
        this.myAccessories.push(accessory);
      }

    }
  }

  accessories(callback) {
    callback(this.myAccessories);


  };
}
export default InkbirdPlatform;

