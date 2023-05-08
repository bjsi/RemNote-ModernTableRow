import {declareIndexPlugin, ReactRNPlugin} from '@remnote/plugin-sdk';
import {useState} from 'react';

export const [TABLE, WIDTH] = ['table', 'width'];

let TableCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const response = await fetch('snippet.css');
    const text = await response.text();
    TableCSS = text;
    await plugin.app.registerCSS('tableCSS', TableCSS);
    console.log('Table Installed from local');
  } catch (error) {
    const response = await fetch(
      'https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/src/snippet.css',
    );
    const text = await response.text();
    TableCSS = text;
    await plugin.app.registerCSS('tableCSS', TableCSS);
    console.log('Table Installed from cdn');
  }
  await plugin.settings.registerStringSetting({
    id: 'opacity',
    title: 'Ruler Opacity',
    description: 'Opacity of the Ruler for measuring left column width',
    defaultValue: '0.15',
  });
  plugin.track(async (reactivePlugin) => {
    const opacityCtrl = await reactivePlugin.settings.getSetting<number>('opacity');
    await reactivePlugin.app.registerCSS(
      'opacity',
      `
#hierarchy-editor [data-rem-container-tags*="table1"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table2"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table3"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table4"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table5"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table6"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table7"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table8"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
#hierarchy-editor [data-rem-container-tags*="table9"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${opacityCtrl};}
      `,
    );
  });

  await plugin.app.registerPowerup('Table', TABLE, 'Attribute Column Width', {
    slots: [
      {
        name: 'TH',
        code: 'tableheader',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table90',
        code: 'table90',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table120',
        code: 'table120',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table150',
        code: 'table150',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table180',
        code: 'table180',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table210',
        code: 'table210',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table240',
        code: 'table240',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table270',
        code: 'table270',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table300',
        code: 'table300',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table330',
        code: 'table330',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table360',
        code: 'table360',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table390',
        code: 'table390',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        code: 'table420',
        name: 'Table420',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        name: 'Table450',
        code: 'table450',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table480',
        code: 'table480',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table510',
        code: 'table510',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table540',
        code: 'table540',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table570',
        code: 'table570',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table600',
        code: 'table600',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table630',
        code: 'table630',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table660',
        code: 'table660',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table690',
        code: 'table690',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table720',
        code: 'table720',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table750',
        code: 'table750',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table780',
        code: 'table780',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table810',
        code: 'table810',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table840',
        code: 'table840',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table870',
        code: 'table870',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table900',
        code: 'table900',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table930',
        code: 'table930',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table960',
        code: 'table960',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table990',
        code: 'table990',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1020',
        code: 'table1020',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1050',
        code: 'table1050',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1080',
        code: 'table1080',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1110',
        code: 'table1110',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1140',
        code: 'table1140',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1170',
        code: 'table1170',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
      {
        name: 'Table1200',
        code: 'table1200',
        hidden: false,
        onlyProgrammaticModifying: false,
      },
    ],
  });
  await plugin.app.registerPowerup('Width', WIDTH, 'Column Width', {
    slots: [
      {
        code: 'w100',
        name: 'W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w200',
        name: 'W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w300',
        name: 'W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w400',
        name: 'W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w500',
        name: 'W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w600',
        name: 'W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w700',
        name: 'W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w800',
        name: 'W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w900',
        name: 'W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'w1000',
        name: 'W1000',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w100',
        name: 'C1W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w100',
        name: 'C2W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w100',
        name: 'C3W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w100',
        name: 'C4W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w100',
        name: 'C5W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w100',
        name: 'C6W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w100',
        name: 'C7W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w100',
        name: 'C8W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w100',
        name: 'C9W100',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w200',
        name: 'C1W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w200',
        name: 'C2W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w200',
        name: 'C3W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w200',
        name: 'C4W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w200',
        name: 'C5W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w200',
        name: 'C6W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w200',
        name: 'C7W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w200',
        name: 'C8W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w200',
        name: 'C9W200',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w300',
        name: 'C1W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w300',
        name: 'C2W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w300',
        name: 'C3W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w300',
        name: 'C4W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w300',
        name: 'C5W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w300',
        name: 'C6W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w300',
        name: 'C7W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w300',
        name: 'C8W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w300',
        name: 'C9W300',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w400',
        name: 'C1W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w400',
        name: 'C2W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w400',
        name: 'C3W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w400',
        name: 'C4W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w400',
        name: 'C5W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w400',
        name: 'C6W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w400',
        name: 'C7W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w400',
        name: 'C8W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w400',
        name: 'C9W400',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w500',
        name: 'C1W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w500',
        name: 'C2W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w500',
        name: 'C3W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w500',
        name: 'C4W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w500',
        name: 'C5W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w500',
        name: 'C6W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w500',
        name: 'C7W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w500',
        name: 'C8W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w500',
        name: 'C9W500',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w600',
        name: 'C1W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w600',
        name: 'C2W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w600',
        name: 'C3W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w600',
        name: 'C4W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w600',
        name: 'C5W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w600',
        name: 'C6W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w600',
        name: 'C7W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w600',
        name: 'C8W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w600',
        name: 'C9W600',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w700',
        name: 'C1W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w700',
        name: 'C2W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w700',
        name: 'C3W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w700',
        name: 'C4W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w700',
        name: 'C5W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w700',
        name: 'C6W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w700',
        name: 'C7W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w700',
        name: 'C8W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w700',
        name: 'C9W700',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w800',
        name: 'C1W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w800',
        name: 'C2W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w800',
        name: 'C3W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w800',
        name: 'C4W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w800',
        name: 'C5W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w800',
        name: 'C6W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w800',
        name: 'C7W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w800',
        name: 'C8W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w800',
        name: 'C9W800',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c1w900',
        name: 'C1W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c2w900',
        name: 'C2W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c3w900',
        name: 'C3W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c4w900',
        name: 'C4W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c5w900',
        name: 'C5W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c6w900',
        name: 'C6W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c7w900',
        name: 'C7W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c8w900',
        name: 'C8W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
      {
        code: 'c9w900',
        name: 'C9W900',
        onlyProgrammaticModifying: false,
        hidden: false,
      },
    ],
  });

  await plugin.app.registerCommand({
    id: 'table',
    name: 'Table',
    quickCode: 'tb',
    keyboardShortcut: 'command+shift+t',
    description: 'All the presets for table left cell customization',
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addTag(TB150);
    },
  });

  await plugin.app.registerCommand({
    id: 'table-header',
    name: 'Table Header',
    quickCode: 'tbh',
    keyboardShortcut: 'command+shift+h',
    description: 'All the presets for table left cell customization',
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const TBH: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'tableheader');
      const TBHID = await TBH._id;
      const remTagged = await rem?.getTagRems();
      
      if (remTagged?.length === 0) {
        await rem?.addTag(TBH);
      } else {
        await rem?.removeTag(TBHID, true);
      }
    },
  });

  await plugin.app.registerCommand({
    id: 'table-list',
    name: 'Table Left Width List',
    quickCode: 'tbl',
    description: 'All the presets for table left cell customization',
    action: async () => {
      const rem = await plugin.powerup.getPowerupByCode(TABLE);
      await rem?.openRemInContext();
    },
  });
  await plugin.app.registerCommand({
    id: 'width-list',
    name: 'Table Global Width List',
    quickCode: 'tbg',
    description: 'A Simple Table',
    action: async () => {
      const rem = await plugin.powerup.getPowerupByCode(WIDTH);
      await rem?.openRemInContext();
    },
  });

  await plugin.app.registerCommand({
    id: 'test',
    name: 'Test',
    description: 'A Simple Test',
    keyboardShortcut: 'opt+shift+t',
    action: async () => {
      const rem = await plugin.powerup.getPowerupByCode(WIDTH);
      console.log(TABLE);
    },
  });

  const TB90: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table90');
  const TB120: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table120');
  const TB150: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table150');
  const TB180: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table180');
  const TB210: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table210');
  const TB240: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table240');
  const TB270: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table270');
  const TB300: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table300');
  const TB330: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table330');
  const TB360: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table360');
  const TB390: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table390');
  const TB420: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table420');
  const TB450: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table450');
  const TB480: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table480');
  const TB510: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table510');
  const TB540: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table540');
  const TB570: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table570');
  const TB600: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table600');
  const TB630: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table630');
  const TB660: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table660');
  const TB690: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table690');
  const TB720: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table720');
  const TB750: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table750');
  const TB780: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table780');
  const TB810: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table810');
  const TB840: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table840');
  const TB870: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table870');
  const TB900: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table900');
  const TB930: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table930');
  const TB960: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table960');
  const TB990: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table990');
  const TB1020: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1020');
  const TB1050: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1050');
  const TB1080: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1080');
  const TB1110: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1110');
  const TB1140: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1140');
  const TB1170: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1170');
  const TB1200: any = await plugin.powerup.getPowerupSlotByCode(TABLE, 'table1200');

  const rmvTag = async () => {
    const rem = await plugin.focus.getFocusedRem();
    const remForTagging = (await rem?.getTagRems()) ?? [];
    const filteredArray = await remForTagging.filter((item) => item.parent);
    const tagID: string = await filteredArray[0]?._id;
    // await console.log(tagID);
    await rem?.removeTag(tagID, true);
  };

  await plugin.app.registerCommand({
    id: 'table-plus',
    name: 'Table - increase property column width',
    quickCode: 'tbi',
    keyboardShortcut: 'command+shift+=',
    description: 'Table starting from 90px to 1200px',
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const tbTag = (await rem?.getTagRems()) ?? [];
      const filteredArray = await tbTag.filter((item) => item.parent);
      // const tbTagSelected = await tbTag.filter(TB360);
      // console.log(tbTagSelected);
      const judgeTag = await filteredArray[0]?.text.toString();
      // console.log(judgeTag);
      judgeTag.includes('Table90') ? (await rmvTag(), await rem?.addTag(TB120)) : null;
      judgeTag.includes('Table120') ? (await rmvTag(), await rem?.addTag(TB150)) : null;
      judgeTag.includes('Table150') ? (await rmvTag(), await rem?.addTag(TB180)) : null;
      judgeTag.includes('Table180') ? (await rmvTag(), await rem?.addTag(TB210)) : null;
      judgeTag.includes('Table210') ? (await rmvTag(), await rem?.addTag(TB240)) : null;
      judgeTag.includes('Table240') ? (await rmvTag(), await rem?.addTag(TB270)) : null;
      judgeTag.includes('Table270') ? (await rmvTag(), await rem?.addTag(TB300)) : null;
      judgeTag.includes('Table300') ? (await rmvTag(), await rem?.addTag(TB330)) : null;
      judgeTag.includes('Table330') ? (await rmvTag(), await rem?.addTag(TB360)) : null;
      judgeTag.includes('Table360') ? (await rmvTag(), await rem?.addTag(TB390)) : null;
      judgeTag.includes('Table390') ? (await rmvTag(), await rem?.addTag(TB420)) : null;
      judgeTag.includes('Table420') ? (await rmvTag(), await rem?.addTag(TB450)) : null;
      judgeTag.includes('Table450') ? (await rmvTag(), await rem?.addTag(TB480)) : null;
      judgeTag.includes('Table480') ? (await rmvTag(), await rem?.addTag(TB510)) : null;
      judgeTag.includes('Table510') ? (await rmvTag(), await rem?.addTag(TB540)) : null;
      judgeTag.includes('Table540') ? (await rmvTag(), await rem?.addTag(TB570)) : null;
      judgeTag.includes('Table570') ? (await rmvTag(), await rem?.addTag(TB600)) : null;
      judgeTag.includes('Table600') ? (await rmvTag(), await rem?.addTag(TB630)) : null;
      judgeTag.includes('Table630') ? (await rmvTag(), await rem?.addTag(TB660)) : null;
      judgeTag.includes('Table660') ? (await rmvTag(), await rem?.addTag(TB690)) : null;
      judgeTag.includes('Table690') ? (await rmvTag(), await rem?.addTag(TB720)) : null;
      judgeTag.includes('Table720') ? (await rmvTag(), await rem?.addTag(TB750)) : null;
      judgeTag.includes('Table750') ? (await rmvTag(), await rem?.addTag(TB780)) : null;
      judgeTag.includes('Table780') ? (await rmvTag(), await rem?.addTag(TB810)) : null;
      judgeTag.includes('Table810') ? (await rmvTag(), await rem?.addTag(TB840)) : null;
      judgeTag.includes('Table840') ? (await rmvTag(), await rem?.addTag(TB870)) : null;
      judgeTag.includes('Table870') ? (await rmvTag(), await rem?.addTag(TB900)) : null;
      judgeTag.includes('Table900') ? (await rmvTag(), await rem?.addTag(TB930)) : null;
      judgeTag.includes('Table930') ? (await rmvTag(), await rem?.addTag(TB960)) : null;
      judgeTag.includes('Table960') ? (await rmvTag(), await rem?.addTag(TB990)) : null;
      judgeTag.includes('Table990') ? (await rmvTag(), await rem?.addTag(TB1020)) : null;
      judgeTag.includes('Table1020') ? (await rmvTag(), await rem?.addTag(TB1050)) : null;
      judgeTag.includes('Table1050') ? (await rmvTag(), await rem?.addTag(TB1080)) : null;
      judgeTag.includes('Table1080') ? (await rmvTag(), await rem?.addTag(TB1110)) : null;
      judgeTag.includes('Table1110') ? (await rmvTag(), await rem?.addTag(TB1140)) : null;
      judgeTag.includes('Table1140') ? (await rmvTag(), await rem?.addTag(TB1170)) : null;
      judgeTag.includes('Table1170') ? (await rmvTag(), await rem?.addTag(TB1200)) : null;
    },
  });
  await plugin.app.registerCommand({
    id: 'table-minus',
    name: 'Table - decrease property column width',
    quickCode: 'tbd',
    keyboardShortcut: 'command+shift+-',
    description: 'Table starting from 1200px to 90px',
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const tbTag = (await rem?.getTagRems()) ?? [];
      const filteredArray = await tbTag.filter((item) => item.parent);
      const judgeTag = await filteredArray[0]?.text.toString();
      // console.log(judgeTag);
      judgeTag.includes('Table120') ? (await rmvTag(), await rem?.addTag(TB90)) : null;
      judgeTag.includes('Table150') ? (await rmvTag(), await rem?.addTag(TB120)) : null;
      judgeTag.includes('Table180') ? (await rmvTag(), await rem?.addTag(TB150)) : null;
      judgeTag.includes('Table210') ? (await rmvTag(), await rem?.addTag(TB180)) : null;
      judgeTag.includes('Table240') ? (await rmvTag(), await rem?.addTag(TB210)) : null;
      judgeTag.includes('Table270') ? (await rmvTag(), await rem?.addTag(TB240)) : null;
      judgeTag.includes('Table300') ? (await rmvTag(), await rem?.addTag(TB270)) : null;
      judgeTag.includes('Table330') ? (await rmvTag(), await rem?.addTag(TB300)) : null;
      judgeTag.includes('Table360') ? (await rmvTag(), await rem?.addTag(TB330)) : null;
      judgeTag.includes('Table390') ? (await rmvTag(), await rem?.addTag(TB360)) : null;
      judgeTag.includes('Table420') ? (await rmvTag(), await rem?.addTag(TB390)) : null;
      judgeTag.includes('Table450') ? (await rmvTag(), await rem?.addTag(TB420)) : null;
      judgeTag.includes('Table480') ? (await rmvTag(), await rem?.addTag(TB450)) : null;
      judgeTag.includes('Table510') ? (await rmvTag(), await rem?.addTag(TB480)) : null;
      judgeTag.includes('Table540') ? (await rmvTag(), await rem?.addTag(TB510)) : null;
      judgeTag.includes('Table570') ? (await rmvTag(), await rem?.addTag(TB540)) : null;
      judgeTag.includes('Table600') ? (await rmvTag(), await rem?.addTag(TB570)) : null;
      judgeTag.includes('Table630') ? (await rmvTag(), await rem?.addTag(TB600)) : null;
      judgeTag.includes('Table660') ? (await rmvTag(), await rem?.addTag(TB630)) : null;
      judgeTag.includes('Table690') ? (await rmvTag(), await rem?.addTag(TB660)) : null;
      judgeTag.includes('Table720') ? (await rmvTag(), await rem?.addTag(TB690)) : null;
      judgeTag.includes('Table750') ? (await rmvTag(), await rem?.addTag(TB720)) : null;
      judgeTag.includes('Table780') ? (await rmvTag(), await rem?.addTag(TB750)) : null;
      judgeTag.includes('Table810') ? (await rmvTag(), await rem?.addTag(TB780)) : null;
      judgeTag.includes('Table840') ? (await rmvTag(), await rem?.addTag(TB810)) : null;
      judgeTag.includes('Table870') ? (await rmvTag(), await rem?.addTag(TB840)) : null;
      judgeTag.includes('Table900') ? (await rmvTag(), await rem?.addTag(TB870)) : null;
      judgeTag.includes('Table930') ? (await rmvTag(), await rem?.addTag(TB900)) : null;
      judgeTag.includes('Table960') ? (await rmvTag(), await rem?.addTag(TB930)) : null;
      judgeTag.includes('Table990') ? (await rmvTag(), await rem?.addTag(TB960)) : null;
      judgeTag.includes('Table1020') ? (await rmvTag(), await rem?.addTag(TB990)) : null;
      judgeTag.includes('Table1050') ? (await rmvTag(), await rem?.addTag(TB1020)) : null;
      judgeTag.includes('Table1080') ? (await rmvTag(), await rem?.addTag(TB1050)) : null;
      judgeTag.includes('Table1110') ? (await rmvTag(), await rem?.addTag(TB1080)) : null;
      judgeTag.includes('Table1140') ? (await rmvTag(), await rem?.addTag(TB1110)) : null;
      judgeTag.includes('Table1170') ? (await rmvTag(), await rem?.addTag(TB1140)) : null;
      judgeTag.includes('Table1200') ? (await rmvTag(), await rem?.addTag(TB1170)) : null;
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
