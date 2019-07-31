/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","99ba5d77e040d470ec4be4dd0bcec842"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","9888db7f61f17a4a22b3cd6a7ec5fa54"],["/js/0.44fecca4b9c0122c564d.js","fe8f1cb425c2be45cbaf7f50305e6a5c"],["/js/1.44fecca4b9c0122c564d.js","d183ce88912c5c0521b68bd5ed09c59f"],["/js/10.44fecca4b9c0122c564d.js","85f9189c56d682fd50df8c06b1b1fda7"],["/js/11.44fecca4b9c0122c564d.js","d704f7a79836593b9f64b8717897a60c"],["/js/12.44fecca4b9c0122c564d.js","006a7d829cce6d981114169845c84116"],["/js/13.44fecca4b9c0122c564d.js","1dde29f1f5fed388367d7ce1597fdc52"],["/js/14.44fecca4b9c0122c564d.js","38d250f2ee90e464d805bda29922f4b8"],["/js/15.44fecca4b9c0122c564d.js","6012fa6ed2112de3f0027cf0045a38c2"],["/js/16.44fecca4b9c0122c564d.js","5fc9e8ab2bcd52ecc1191c9dc4e440cb"],["/js/17.44fecca4b9c0122c564d.js","71dfaa8d19175626a169818c84d6ebfa"],["/js/18.44fecca4b9c0122c564d.js","170ec5dbe4b1c8044f2a8706a3a855f4"],["/js/19.44fecca4b9c0122c564d.js","a3794d6f8e8797de1f8f6c9f5816f015"],["/js/2.44fecca4b9c0122c564d.js","55b6ce727b65aa74c1e7944cf41d4713"],["/js/20.44fecca4b9c0122c564d.js","a6dbeebe473de92edb9815aec204f579"],["/js/21.44fecca4b9c0122c564d.js","4fa22ed9154d76df35c383e189864de4"],["/js/22.44fecca4b9c0122c564d.js","816e598d4667297df251de8c1d691428"],["/js/23.44fecca4b9c0122c564d.js","51d58695deec9a58f7faf9eb877800ac"],["/js/24.44fecca4b9c0122c564d.js","0931a9828cab5a24bfbf4accb1668bbd"],["/js/25.44fecca4b9c0122c564d.js","9318fc0e1b86311205f173c30478b64f"],["/js/26.44fecca4b9c0122c564d.js","057c7f122d32045746b0c70afd85854f"],["/js/27.44fecca4b9c0122c564d.js","0e02056c1f0acdee60d51d63835a8561"],["/js/28.44fecca4b9c0122c564d.js","6266234a04e2ba123f4b526cd91b8bdf"],["/js/29.44fecca4b9c0122c564d.js","06d7cf9514c912369edb97faaf157855"],["/js/3.44fecca4b9c0122c564d.js","54c546b029d3b8283875576420b8127d"],["/js/30.44fecca4b9c0122c564d.js","b910f11868fe897f7977c691ec6ea34e"],["/js/31.44fecca4b9c0122c564d.js","b20cf02f7e3fc97649200f579f4cb086"],["/js/32.44fecca4b9c0122c564d.js","802f298c1c1ce6c43585866cdfe6c1fc"],["/js/33.44fecca4b9c0122c564d.js","997015ffb4e7afa208b6d6a22fa708fd"],["/js/34.44fecca4b9c0122c564d.js","632e88e61c2a259762ac407761b05105"],["/js/35.44fecca4b9c0122c564d.js","6457c00924d0e9260021f8a56ade02fa"],["/js/36.44fecca4b9c0122c564d.js","e69b1d525abc9437fcb3b9284fe97b06"],["/js/37.44fecca4b9c0122c564d.js","d049842a2efe14797612eaab7b055260"],["/js/38.44fecca4b9c0122c564d.js","a5f4843b309b0ed8cbfc0c17b860c11a"],["/js/39.44fecca4b9c0122c564d.js","57f6017a0db690dc962f339927c32d65"],["/js/4.44fecca4b9c0122c564d.js","629e09a13a79b4a3200dc9363f1673a5"],["/js/40.44fecca4b9c0122c564d.js","bb8e6239194dbe747b035998615fcce5"],["/js/404.44fecca4b9c0122c564d.js","6c0b5ad33808c7db1d1f020646d501f4"],["/js/41.44fecca4b9c0122c564d.js","9474e505b64caa5b9d06a50049c6ccf2"],["/js/42.44fecca4b9c0122c564d.js","15fba7ff6969588d5a85237580ce018f"],["/js/43.44fecca4b9c0122c564d.js","22e81878d7e1c8c76b7d60c88aee801e"],["/js/44.44fecca4b9c0122c564d.js","672563b04f759f389780866934bc30e6"],["/js/45.44fecca4b9c0122c564d.js","570a3d7bed021f2d1b88a134bb439329"],["/js/46.44fecca4b9c0122c564d.js","2ec9a22e8918f4c2100520c39dcf8bef"],["/js/47.44fecca4b9c0122c564d.js","f496f3f0f35925c6a38fc31c87b8d11a"],["/js/48.44fecca4b9c0122c564d.js","c8bfdc90ab19c6c3eaf905aadda8515e"],["/js/49.44fecca4b9c0122c564d.js","6d3c1cf4d2c200b0c6c6efdb2257885d"],["/js/5.44fecca4b9c0122c564d.js","34a6c9e04d9fd43ae285587b1dc8c5db"],["/js/50.44fecca4b9c0122c564d.js","7b4cd7b23d5bba6d2b41b9e0037033d3"],["/js/51.44fecca4b9c0122c564d.js","f0667391929e0211b6ce66ede8e8a8c6"],["/js/52.44fecca4b9c0122c564d.js","58cd9919ec2931f31e5c7f034176f516"],["/js/53.44fecca4b9c0122c564d.js","e113a45363284faf1ddfcaa03809d312"],["/js/54.44fecca4b9c0122c564d.js","6a5c5b019d81c2ff8a7180ea577205cf"],["/js/55.44fecca4b9c0122c564d.js","40ed6c825bf0f3ad6a22ac5a62fd91d2"],["/js/56.44fecca4b9c0122c564d.js","df546375475a29cbad374970bfbabdf4"],["/js/57.44fecca4b9c0122c564d.js","f6ddcffdc22ba9944cb9b51af9c430ae"],["/js/58.44fecca4b9c0122c564d.js","1741110aa77b141f8090c71bf352d945"],["/js/59.44fecca4b9c0122c564d.js","1605c5c0f92fdb6f45d946f77e1e0dd9"],["/js/6.44fecca4b9c0122c564d.js","eb57da9ca3e7eac68abe867858295734"],["/js/60.44fecca4b9c0122c564d.js","488c52df45f869d6d93ee9045b42249c"],["/js/61.44fecca4b9c0122c564d.js","8d8440fcc7ea184245b1514274841331"],["/js/62.44fecca4b9c0122c564d.js","2bf2584d6a0322d9039d41c265223b74"],["/js/63.44fecca4b9c0122c564d.js","8f60496df5a9ee1505c6b365cfe5ebc3"],["/js/64.44fecca4b9c0122c564d.js","e51d59774bcb63ee9f8925c5f1f5ebb0"],["/js/65.44fecca4b9c0122c564d.js","18c1c77bc6bdc03713cdcec58d0b4242"],["/js/66.44fecca4b9c0122c564d.js","5cf1e4a727de4d4b3c95782da702af2f"],["/js/67.44fecca4b9c0122c564d.js","0ece398479f5a1cac59d196bd8f4b508"],["/js/68.44fecca4b9c0122c564d.js","83ec2e8688f3a9090b4a32aac490455f"],["/js/69.44fecca4b9c0122c564d.js","0b65aede187a0ee54dc638d1ae587e6d"],["/js/7.44fecca4b9c0122c564d.js","4ecb2f774f6ca2cdbf5a279c8f68c1b2"],["/js/70.44fecca4b9c0122c564d.js","ae38a496f843552d8983e7664dc0b7fa"],["/js/71.44fecca4b9c0122c564d.js","a5a9264e08eac5d02f123feba82d65d8"],["/js/8.44fecca4b9c0122c564d.js","9c91a6b2b8d53ce8c8b958ad0c66cef6"],["/js/9.44fecca4b9c0122c564d.js","e224c77644c341a097ef89a27a997113"],["/js/DenialOfServiceModal.44fecca4b9c0122c564d.js","da9884f0f9c7b332f6d8127f431cf78f"],["/js/MarketUnavailableModal.44fecca4b9c0122c564d.js","db1db953500ccf302f204130f4b36e02"],["/js/ServicesErrorModal.44fecca4b9c0122c564d.js","bb7441be2faa9a5c2d4abf09a3798002"],["/js/UnsupportedContractModal.44fecca4b9c0122c564d.js","6e625764e707c84aa083c081b8ad2b27"],["/js/account-info.44fecca4b9c0122c564d.js","881b0c73490ab44d5ed89efb9ecb6063"],["/js/contract.44fecca4b9c0122c564d.js","7c99d06a1bf582464235e5ca4d8c0a0c"],["/js/default~open_position~1833eefb.44fecca4b9c0122c564d.js","3912dd596ad70a511514579597e37351"],["/js/digits.44fecca4b9c0122c564d.js","3ee98719d90eb7e2fd222fb0909a440f"],["/js/info-box.44fecca4b9c0122c564d.js","ad18271b961131cdcef40ad309c447c2"],["/js/main.44fecca4b9c0122c564d.js","aa25711a516ff729a95d0392b7d4b9ad"],["/js/notification-messages.44fecca4b9c0122c564d.js","286853822b0dd4b8638ead62a13124fe"],["/js/open_positions.44fecca4b9c0122c564d.js","a4fdca97b2b89ba236fd232a1885cfe9"],["/js/profit_table.44fecca4b9c0122c564d.js","a9e479d18d2a171899c80b15b6fda2c7"],["/js/push-notification.44fecca4b9c0122c564d.js","ea3f1f419a636a337a90b3ab49fff278"],["/js/reports.44fecca4b9c0122c564d.js","ab00693638fcffccb79ef7d1c5604d24"],["/js/screen-small.44fecca4b9c0122c564d.js","3e8ee34ed239530d0edcd9ebbb9ee16e"],["/js/settings-chart.44fecca4b9c0122c564d.js","fdde37b99410a61879f2d663ac7023a0"],["/js/settings-language.44fecca4b9c0122c564d.js","facefe8b1749546d31eb8b2c94e15d62"],["/js/settings-theme.44fecca4b9c0122c564d.js","1fd3c2ac060b2648729bb23da4884431"],["/js/smart_chart.44fecca4b9c0122c564d.js","fa233d528d1be069986e43168083a31a"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/statement.44fecca4b9c0122c564d.js","0c8bed061b149c2d45de2d7b4370a685"],["/js/toggle-cashier.44fecca4b9c0122c564d.js","3b509824567d856cac62cd3546aefde9"],["/js/toggle-menu-drawer.44fecca4b9c0122c564d.js","88aa8d3d971e9d7f969ea41b25d2d29a"],["/js/two-month-picker.44fecca4b9c0122c564d.js","80c23eedff0373689c8eb5f59597e002"],["/js/vendors~main.44fecca4b9c0122c564d.js","98c6e12f87c713d6090217e5842e8b73"],["/js/vendors~open_position~7c650be5.44fecca4b9c0122c564d.js","fe4b74d5fe603476a98506c94ad35070"],["/js/vendors~smart_chart.44fecca4b9c0122c564d.js","813f69d1896891e60a68707186153b4e"],["/js/wallet-information.44fecca4b9c0122c564d.js","660d1957e1ff600bf4e56bde9e12306b"],["/js/work-in-progress.44fecca4b9c0122c564d.js","e9e83f863fdbbd6a19946f5d1f8d5e1c"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});






