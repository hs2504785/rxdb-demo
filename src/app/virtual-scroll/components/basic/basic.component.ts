import { Component, OnInit } from '@angular/core';
// import * as faker from 'faker';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  people: any[];
  constructor() {}

  ngOnInit(): void {
    // this.people = Array(100)
    //   .fill(1)
    //   .map(_ => {
    //     return {
    //       name: faker.name.findName(),
    //       bio: faker.hacker.phrase()
    //     };
    //   });
    this.people = [
      {
        name: 'Erma Harber',
        bio: "You can't connect the interface without transmitting the cross-platform SSL card!",
      },
      {
        name: 'Chester Zulauf',
        bio: 'If we bypass the firewall, we can get to the ADP alarm through the primary JSON circuit!',
      },
      {
        name: 'Sherry Erdman',
        bio: 'We need to compress the online SSL protocol!',
      },
      {
        name: 'Carmen Cremin',
        bio: "parsing the microchip won't do anything, we need to bypass the back-end HDD feed!",
      },
      {
        name: 'Jordan Torp',
        bio: 'If we index the matrix, we can get to the FTP sensor through the virtual JBOD sensor!',
      },
      {
        name: 'Lena Jerde',
        bio: "I'll back up the primary COM monitor, that should hard drive the AGP firewall!",
      },
      {
        name: 'Chester Koch II',
        bio: 'Use the wireless SCSI monitor, then you can override the cross-platform feed!',
      },
      {
        name: 'Joann Waters',
        bio: 'The JBOD application is down, program the wireless application so we can override the IB application!',
      },
      {
        name: 'Homer Rogahn',
        bio: 'Use the mobile EXE circuit, then you can calculate the optical matrix!',
      },
      {
        name: 'Ethel Sauer',
        bio: 'Try to navigate the USB bus, maybe it will navigate the open-source hard drive!',
      },
      {
        name: 'Pat Kutch',
        bio: "programming the bandwidth won't do anything, we need to compress the digital GB pixel!",
      },
      {
        name: 'Winifred Douglas',
        bio: 'If we bypass the alarm, we can get to the SCSI system through the online RAM matrix!',
      },
      {
        name: 'Lola Romaguera',
        bio: 'The AI application is down, synthesize the multi-byte panel so we can quantify the SMS card!',
      },
      {
        name: 'Alex Price',
        bio: 'Use the mobile ADP transmitter, then you can reboot the online protocol!',
      },
      {
        name: 'Harry Flatley',
        bio: 'Use the wireless FTP application, then you can copy the mobile application!',
      },
      {
        name: 'Dora Tillman',
        bio: 'If we copy the program, we can get to the TCP protocol through the virtual GB bus!',
      },
      {
        name: 'Leslie Rau',
        bio: 'If we input the protocol, we can get to the SMS application through the optical THX firewall!',
      },
      {
        name: 'Heather Schroeder',
        bio: 'If we compress the transmitter, we can get to the SDD array through the redundant COM monitor!',
      },
      {
        name: 'Antoinette Zulauf',
        bio: "I'll reboot the 1080p THX array, that should port the CSS alarm!",
      },
      {
        name: 'Arthur Mills',
        bio: 'The EXE interface is down, input the solid state transmitter so we can reboot the USB array!',
      },
      {
        name: 'Brooke Hegmann',
        bio: "I'll calculate the digital THX panel, that should bus the HTTP interface!",
      },
      {
        name: 'Ronnie Kreiger',
        bio: 'We need to calculate the digital SMS sensor!',
      },
      {
        name: 'Crystal Yost',
        bio: "You can't transmit the card without calculating the mobile SMS hard drive!",
      },
      {
        name: 'Neal Haag',
        bio: 'Try to navigate the CSS card, maybe it will bypass the wireless pixel!',
      },
      {
        name: 'Betsy Upton',
        bio: "You can't override the hard drive without navigating the solid state FTP circuit!",
      },
      {
        name: 'Doug Kiehn DVM',
        bio: "backing up the panel won't do anything, we need to back up the primary HDD program!",
      },
      {
        name: 'Ivan Hoppe',
        bio: 'If we compress the application, we can get to the FTP hard drive through the cross-platform JBOD interface!',
      },
      {
        name: 'Fredrick Hodkiewicz',
        bio: 'We need to generate the auxiliary SCSI transmitter!',
      },
      {
        name: 'Kristine Hills',
        bio: "You can't hack the sensor without copying the optical AGP feed!",
      },
      {
        name: 'Clifton Schulist',
        bio: 'The RSS driver is down, transmit the auxiliary capacitor so we can input the SMS card!',
      },
      {
        name: 'Ernestine Volkman',
        bio: "I'll index the solid state ADP bandwidth, that should alarm the IB feed!",
      },
      {
        name: 'Herman Reynolds',
        bio: 'The RAM capacitor is down, copy the digital capacitor so we can input the SMTP program!',
      },
      {
        name: 'Connie MacGyver',
        bio: 'Try to bypass the PNG array, maybe it will index the neural circuit!',
      },
      {
        name: 'Bridget Schowalter',
        bio: "I'll hack the wireless SQL protocol, that should alarm the XML monitor!",
      },
      {
        name: 'Lorena Hermiston',
        bio: 'The HDD sensor is down, generate the cross-platform array so we can calculate the SSL feed!',
      },
      {
        name: 'Damon Kuhic',
        bio: "You can't compress the pixel without transmitting the neural IB matrix!",
      },
      {
        name: 'Van Kirlin',
        bio: 'Use the virtual JSON driver, then you can copy the multi-byte bandwidth!',
      },
      {
        name: 'Gene Klein',
        bio: "calculating the system won't do anything, we need to calculate the auxiliary ADP card!",
      },
      {
        name: 'Rosie Grant',
        bio: 'Try to generate the SQL system, maybe it will hack the haptic program!',
      },
      {
        name: 'Mr. Preston Batz',
        bio: 'Use the neural XML capacitor, then you can hack the optical card!',
      },
      {
        name: 'Rita Rodriguez',
        bio: 'Use the online TCP alarm, then you can navigate the back-end sensor!',
      },
      {
        name: 'Dominic Koepp',
        bio: 'If we program the feed, we can get to the SMS driver through the cross-platform XSS panel!',
      },
      {
        name: 'Katie Blanda',
        bio: 'Try to parse the USB capacitor, maybe it will copy the 1080p interface!',
      },
      {
        name: 'Delores Gerlach',
        bio: 'We need to compress the virtual SCSI transmitter!',
      },
      {
        name: 'Alfred Roberts',
        bio: "programming the card won't do anything, we need to calculate the bluetooth COM circuit!",
      },
      {
        name: 'Glen Vandervort III',
        bio: 'We need to compress the virtual EXE panel!',
      },
      {
        name: 'Brandy Blanda DDS',
        bio: 'If we bypass the driver, we can get to the XML feed through the neural SQL application!',
      },
      {
        name: 'Rick Bartell',
        bio: 'Use the open-source USB firewall, then you can connect the optical bandwidth!',
      },
      {
        name: 'Fannie Senger',
        bio: "I'll program the open-source JBOD bandwidth, that should port the XSS application!",
      },
      {
        name: 'Archie Schuster',
        bio: "transmitting the transmitter won't do anything, we need to navigate the wireless CSS system!",
      },
      {
        name: 'Orville Simonis',
        bio: "You can't override the capacitor without navigating the mobile PCI circuit!",
      },
      {
        name: 'Sylvester Cummings',
        bio: 'The SAS protocol is down, synthesize the auxiliary bus so we can bypass the RAM feed!',
      },
      {
        name: 'Jermaine Balistreri',
        bio: 'Try to hack the JSON transmitter, maybe it will back up the back-end microchip!',
      },
      {
        name: 'Yvette Jenkins',
        bio: 'Use the open-source HDD interface, then you can parse the haptic microchip!',
      },
      {
        name: 'Rodolfo Torp',
        bio: "generating the program won't do anything, we need to reboot the mobile SQL microchip!",
      },
      {
        name: 'Belinda Schultz',
        bio: 'Use the wireless USB port, then you can parse the open-source microchip!',
      },
      {
        name: 'Edith Berge',
        bio: 'Try to quantify the SCSI port, maybe it will reboot the neural firewall!',
      },
      {
        name: 'Theodore Paucek',
        bio: "I'll index the neural SMTP hard drive, that should pixel the SAS monitor!",
      },
      {
        name: 'Darren Fahey',
        bio: 'We need to connect the multi-byte SSL hard drive!',
      },
      {
        name: 'Tamara Bogan',
        bio: "I'll hack the online USB sensor, that should interface the GB monitor!",
      },
      {
        name: 'Joy Blick',
        bio: 'We need to hack the primary SSL alarm!',
      },
      {
        name: 'Evelyn Grant',
        bio: 'The PNG alarm is down, transmit the solid state port so we can program the FTP alarm!',
      },
      {
        name: 'Ida Torphy',
        bio: "You can't transmit the system without copying the wireless RSS port!",
      },
      {
        name: 'Leigh Leannon',
        bio: 'We need to input the solid state XML port!',
      },
      {
        name: 'Miss Jana Reilly',
        bio: "You can't navigate the feed without overriding the optical AGP capacitor!",
      },
      {
        name: 'Earnest Dickinson',
        bio: 'We need to copy the neural RSS driver!',
      },
      {
        name: 'Ross Lind',
        bio: 'We need to program the optical AI alarm!',
      },
      {
        name: 'Marlene Heidenreich',
        bio: "You can't compress the bus without hacking the optical HDD firewall!",
      },
      {
        name: 'Mr. Lynda Wolf',
        bio: "You can't copy the port without indexing the auxiliary CSS matrix!",
      },
      {
        name: 'Krista Swift',
        bio: 'The SDD protocol is down, bypass the redundant interface so we can parse the SMS transmitter!',
      },
      {
        name: 'Constance Ward',
        bio: 'The ADP bus is down, quantify the optical firewall so we can input the SCSI system!',
      },
      {
        name: 'Jonathon Rohan',
        bio: 'We need to synthesize the wireless IB protocol!',
      },
      {
        name: 'Harold Mohr',
        bio: "I'll connect the bluetooth PNG hard drive, that should microchip the XML interface!",
      },
      {
        name: 'Tara Lynch',
        bio: 'We need to generate the digital EXE bandwidth!',
      },
      {
        name: 'Nancy Wuckert',
        bio: "I'll quantify the open-source RAM card, that should circuit the USB bandwidth!",
      },
      {
        name: 'Willie Reichert',
        bio: "You can't transmit the program without copying the online SDD program!",
      },
      {
        name: 'Mrs. Viola Bode',
        bio: 'If we override the panel, we can get to the IB microchip through the neural SDD firewall!',
      },
      {
        name: 'Mr. Molly Ratke',
        bio: 'Try to navigate the HTTP hard drive, maybe it will navigate the virtual bandwidth!',
      },
      {
        name: 'Elvira Rogahn',
        bio: 'If we reboot the bus, we can get to the SSL matrix through the virtual IB bandwidth!',
      },
    ];
  }
}
