import BleScanner from './BleScanner.js';
import IBSTH1Accessory from './IBSTH1Accessory.js';
import IBSPO1Accessory from './IBSPO1Accessory.js';
import IBSM1SGateway from './IBSM1SGateway.js';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


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
    this.localUUIDs = [];
    this.showBridge=config.showBridge;
    this.meshNetwork
    this.meshId
    this.networkTopology
    this.networkTopologyId
    this.uuid = ('hap-nodejs').uuid;
    this.Service = ('hap-nodejs').Service;
    this.Characteristic = ('hap-nodejs').Characteristic;

    if(!config.email || !config.password){
      this.log.error('Valid email and password are required in order to communicate with the inkbird, please check the plugin config')
    }
    this.Service = this.api.hap.Service;
    this.Characteristic = this.api.hap.Characteristic;
    this.name = config.name;


    this.log.info('Starting Inkbird Platform using homebridge API', api.version)
    if(api){
      this.api=api
      this.api.on('didFinishLaunching', () => {
        log.debug('Executed didFinishLaunching callback');
        // run the method to discover / register your devices as accessories


      });
    }
    const devicesDiscovered = [
      {
        UniqueId: 'IBS-M1S',
        DisplayName: 'Inkbird Wifi Gateway',
      },
      {
        UniqueId: 'IBS-PO1/B',
        DisplayName: 'Pool Temperature Sensor',
      },
      {
        UniqueId: 'IBS-TH1',
        DisplayName: 'Hot Tub Temperature Sensor',
      },
    ];
    for (const deviceDiscovered of devicesDiscovered) {
      const uuid = this.api.hap.uuid.generate(deviceDiscovered.UniqueId);
      const existingAccessory = this.accessories(accessory => accessory.UUID === uuid);
      if (existingAccessory) {
        // the accessory already exists
        this.log.info('Restoring existing accessory from cache:', existingAccessory.displayName);
        new InkbirdPlatform(this, existingAccessory);
      } else {
        this.log.info(InkbirdPlatform);
        const accessory = new this.api.platformAccessory('Inkbird Temperature Sensor', uuid);
        accessory.context.device = InkbirdPlatform;
      }
    }
    // If the user has configured cloud username and password then get a device list
    let cloudDevices = [];
    try {
      if (!this.config.username || !this.config.password) {
        throw new Error(platformLang.missingCreds);
      }
      this.cloudClient = new httpClient(this);
      this.accountDetails = this.cloudClient.login();
      cloudDevices = this.cloudClient.getDevices();

      // Initialise the cloud configured devices into Homebridge
      cloudDevices.forEach((device) => this.initialiseDevice(device));
    } catch (err) {
      this.cloudClient = false;
      this.accountDetails = {
        key: this.config.userkey,
      };
    }
    'bridge';
    let bridgeAccessory
    let bridgeService
    this.log.debug('Adding Bridge Device')
    this.log.debug('Found device %s', devicesDiscovered.name)
    switch (devicesDiscovered.hardware_version){
      case 'IBS-M1S',

      // Create and configure Gen 1Bridge Service

      this.log.warn(devicesDiscovered):

        this.log.debug('Creating and configuring new bridge')
        bridgeAccessory=(devicesDiscovered)
        bridgeService=(Service.Tunnel)
        bridgeService=(devicesDiscovered)


    }

    // Boot scanner and register devices to scanner new api.hap.Service.TemperatureSensor;
    this.scanner = new BleScanner(this.log);

    for (let device of this.devices = '2') {
      this.scanner.addDevice(device.deviceId);
      if (device.type === 'IBSM1S') {

        let accessory = new IBSM1SGateway(this.log, this.scanner, device, global.homebridge);
        this.myAccessories.push(accessory);
      }
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


  catch(err){
    this.log.error('Error updating service %s', err)
  }

}
export default InkbirdPlatform;

