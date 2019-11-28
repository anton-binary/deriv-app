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

var precacheConfig = [["/br_muut/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/br_muut/css/1.css","faf17afc3bf7006e52a16b8e2e91bb99"],["/br_muut/css/2.css","a7c5ae7b8aad68b0ebccd48feeeb543f"],["/br_muut/css/4.css","7ceb42172807b6de45b5e0f323907d9e"],["/br_muut/css/AccountSignupModal.css","4b49a00e791bc90ddf73fc2dfa04db73"],["/br_muut/css/app.css","9b0b65f2d48699c2ac85e761ecde6dd1"],["/br_muut/css/bot.css","66cb4aae952801292e6985de637c6f6e"],["/br_muut/css/modals.css","d4cb86a2ef190c06a9355877ce9e9101"],["/br_muut/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/br_muut/css/work-in-progress.css","2ef239dd9b16ce9761c7c8827c2479bd"],["/br_muut/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_muut/index.html","dd91ec8101491e1b6ec9383c9137dcc9"],["/br_muut/js/0.d3a9fed7e5c415cc744d.js","c7e22fb251e3dd16c1d52920b911be61"],["/br_muut/js/1.d3a9fed7e5c415cc744d.js","fb340291c2b06191df674f2113cf7d1f"],["/br_muut/js/10.d3a9fed7e5c415cc744d.js","ea5b00e45d1ef04bbc0177885c694567"],["/br_muut/js/11.d3a9fed7e5c415cc744d.js","984e200ea0730e8de5210e96d35f5362"],["/br_muut/js/12.d3a9fed7e5c415cc744d.js","ddd56a3dbd2f20174fb89abf07224eab"],["/br_muut/js/13.d3a9fed7e5c415cc744d.js","4e979a8afbbf9087c82acde7739aadd1"],["/br_muut/js/14.d3a9fed7e5c415cc744d.js","f91d154e0bcaa5c1fed85569193d5a8f"],["/br_muut/js/15.d3a9fed7e5c415cc744d.js","5a2ff6865fe86dac350f9612b516c7a0"],["/br_muut/js/16.d3a9fed7e5c415cc744d.js","09cbc313ee4258f852f1730898b169f2"],["/br_muut/js/17.d3a9fed7e5c415cc744d.js","8680158852b57a9605af2457ca67e94b"],["/br_muut/js/18.d3a9fed7e5c415cc744d.js","1f89cf5b860edea38d8f8e92eaa1b205"],["/br_muut/js/19.d3a9fed7e5c415cc744d.js","a1dfd3eb8d558006f5df35100adce6b7"],["/br_muut/js/2.d3a9fed7e5c415cc744d.js","ad481c4ebe7488c029740af79718ed0b"],["/br_muut/js/20.d3a9fed7e5c415cc744d.js","1aa76fedbbc4620824b96b79c673c1c4"],["/br_muut/js/21.d3a9fed7e5c415cc744d.js","ff3388d1ed04b0432acd823b8bcdf3d6"],["/br_muut/js/22.d3a9fed7e5c415cc744d.js","b5c8370657f3a8a001e17794ec3e0697"],["/br_muut/js/23.d3a9fed7e5c415cc744d.js","8a72f89ac64092b5121bfb0464160d37"],["/br_muut/js/24.d3a9fed7e5c415cc744d.js","7946dae6d1dfcd61a30719b60d1f0d1f"],["/br_muut/js/25.d3a9fed7e5c415cc744d.js","89896e2554ed15e2c486a6065ad49764"],["/br_muut/js/26.d3a9fed7e5c415cc744d.js","b8793369ea7385de5ba24e5dacec6ae3"],["/br_muut/js/27.d3a9fed7e5c415cc744d.js","bec48de9672084e031a109312ea3747d"],["/br_muut/js/28.d3a9fed7e5c415cc744d.js","226fb589b7e49a5452345e9d543e5756"],["/br_muut/js/29.d3a9fed7e5c415cc744d.js","7ef28c540323ab67fded0762ed7ac8ea"],["/br_muut/js/3.d3a9fed7e5c415cc744d.js","32c508f8b95a0047f266de397cb41740"],["/br_muut/js/30.d3a9fed7e5c415cc744d.js","e8e9d33a24c3d3cb00455f468f792802"],["/br_muut/js/31.d3a9fed7e5c415cc744d.js","f2f923b183c3c85d1f5c120d18483a69"],["/br_muut/js/32.d3a9fed7e5c415cc744d.js","ed59fa022b910e7e4e9d62d65b84f3a7"],["/br_muut/js/33.d3a9fed7e5c415cc744d.js","e00dfa3c1936f710cfc5cfc2ba6bc3f0"],["/br_muut/js/34.d3a9fed7e5c415cc744d.js","3fd2bb604a9dec8c58d26ccd216f401b"],["/br_muut/js/35.d3a9fed7e5c415cc744d.js","8e15430b07080617256736eaae875fac"],["/br_muut/js/36.d3a9fed7e5c415cc744d.js","2c677c3a90bb17b754a365e837a89e28"],["/br_muut/js/37.d3a9fed7e5c415cc744d.js","9a9d5d2fb67f65db0b5edfc2696f270d"],["/br_muut/js/38.d3a9fed7e5c415cc744d.js","7da1c7af17d91b00795ed40cbc73b2ae"],["/br_muut/js/39.d3a9fed7e5c415cc744d.js","958e8f97fd8dc5766a8456cf680d20f8"],["/br_muut/js/4.d3a9fed7e5c415cc744d.js","e74a524d8653e0942364b158c93c8df8"],["/br_muut/js/40.d3a9fed7e5c415cc744d.js","c86fe46092401bb288d1d057764a82cb"],["/br_muut/js/404.d3a9fed7e5c415cc744d.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_muut/js/41.d3a9fed7e5c415cc744d.js","19e294b7dd39e20c35f336af10151564"],["/br_muut/js/42.d3a9fed7e5c415cc744d.js","bc54fb1f7bd31caaace783f2ae30a309"],["/br_muut/js/43.d3a9fed7e5c415cc744d.js","139fbae23efc9d8a5f4a3ec6aa4843fe"],["/br_muut/js/44.d3a9fed7e5c415cc744d.js","ab7340c14ad2d315fe3e55f13a5a2022"],["/br_muut/js/45.d3a9fed7e5c415cc744d.js","5e56e8315c2ee75c83e383ce99097cdc"],["/br_muut/js/46.d3a9fed7e5c415cc744d.js","686283c22d892d35f8229ce9a3b1d605"],["/br_muut/js/47.d3a9fed7e5c415cc744d.js","6fa76a22248b8e375b47736a1b6b52b9"],["/br_muut/js/48.d3a9fed7e5c415cc744d.js","71519e6fd21654643c8efc3520bff3b7"],["/br_muut/js/49.d3a9fed7e5c415cc744d.js","2022bad1fc8c5787b7a9e1d6b67e9e4f"],["/br_muut/js/5.d3a9fed7e5c415cc744d.js","54aa50d3c1e460e9decf7a2cdbc2b916"],["/br_muut/js/50.d3a9fed7e5c415cc744d.js","7b6163cd0cb7995d0e4e53a8405c0f07"],["/br_muut/js/51.d3a9fed7e5c415cc744d.js","fad063836ffb2dab2579ff6f7fcffa35"],["/br_muut/js/52.d3a9fed7e5c415cc744d.js","fa3cfdc69dca4105d653fe051842b22e"],["/br_muut/js/53.d3a9fed7e5c415cc744d.js","797bde8d3bf3882f6f062289cf78cb67"],["/br_muut/js/54.d3a9fed7e5c415cc744d.js","b13b101fc28a7a94c860e69356518323"],["/br_muut/js/55.d3a9fed7e5c415cc744d.js","c8d1c9a88eee730ac22596b9a4962637"],["/br_muut/js/56.d3a9fed7e5c415cc744d.js","6faa21a60aa3946d52e20dddffc7cd62"],["/br_muut/js/57.d3a9fed7e5c415cc744d.js","9e4232851ee344ebc04b0d19beb61c4c"],["/br_muut/js/58.d3a9fed7e5c415cc744d.js","167872383aef97c1efcb26301d6aed5b"],["/br_muut/js/59.d3a9fed7e5c415cc744d.js","492a7daafe10dbe9c0acefa6f1bfcd84"],["/br_muut/js/6.d3a9fed7e5c415cc744d.js","49783e965992ba09ed8dc2a6734e63aa"],["/br_muut/js/60.d3a9fed7e5c415cc744d.js","d7fad90fa7854d906c6f4973abcd52e8"],["/br_muut/js/61.d3a9fed7e5c415cc744d.js","e8552e1c71195a14bd9416a3a53836b3"],["/br_muut/js/62.d3a9fed7e5c415cc744d.js","0d628da521fc978a534b69dc87b83d8a"],["/br_muut/js/63.d3a9fed7e5c415cc744d.js","5a939c0c3c0326220d5ae35b1eb7efe3"],["/br_muut/js/64.d3a9fed7e5c415cc744d.js","67b238fcdc683defb61d197ebf120251"],["/br_muut/js/65.d3a9fed7e5c415cc744d.js","611d4a419362448fb99e0e2ac9e55538"],["/br_muut/js/66.d3a9fed7e5c415cc744d.js","b8db98454e3c3f73121307afbc3e1dde"],["/br_muut/js/67.d3a9fed7e5c415cc744d.js","584e764dcc6fcd5d4892f0c8b1d4ec5d"],["/br_muut/js/68.d3a9fed7e5c415cc744d.js","e9b8c25b21fe7f09c6048b3ca80ad6a6"],["/br_muut/js/69.d3a9fed7e5c415cc744d.js","6374691a6e4bae68affad0ad515e297a"],["/br_muut/js/7.d3a9fed7e5c415cc744d.js","1c730a5cac1343dc1e01e0906224159b"],["/br_muut/js/70.d3a9fed7e5c415cc744d.js","743fe34f40c191d1c64d708a6206c7f4"],["/br_muut/js/71.d3a9fed7e5c415cc744d.js","c0eb78bb5edf6a1580720ed7da1e908e"],["/br_muut/js/72.d3a9fed7e5c415cc744d.js","ea2108045af3a07caf950b4b9cb66076"],["/br_muut/js/73.d3a9fed7e5c415cc744d.js","a21c204b00da39ade09775d495d9b955"],["/br_muut/js/74.d3a9fed7e5c415cc744d.js","b9ff3b76f9708af740015cbe525c5074"],["/br_muut/js/75.d3a9fed7e5c415cc744d.js","fd359e4b21cfaf92d1167117432e3c03"],["/br_muut/js/76.d3a9fed7e5c415cc744d.js","f13b97b3afb7d2468d655f5fb7c362c1"],["/br_muut/js/77.d3a9fed7e5c415cc744d.js","ff2425d244e457e90e6ebcbdab86a971"],["/br_muut/js/78.d3a9fed7e5c415cc744d.js","acc0f36bd9deaa35ab3edf5f30564345"],["/br_muut/js/79.d3a9fed7e5c415cc744d.js","912fb3745516f2eb5677bced39e5204f"],["/br_muut/js/8.d3a9fed7e5c415cc744d.js","96fd5131cc1a1bfe7930b3632323cab0"],["/br_muut/js/80.d3a9fed7e5c415cc744d.js","5c283aab1cdf0d90ae64deed3cc491f2"],["/br_muut/js/81.d3a9fed7e5c415cc744d.js","a7d8227dc904d13a59878b4a939711f7"],["/br_muut/js/82.d3a9fed7e5c415cc744d.js","b4beb2316056e655784d83e0a50c0df4"],["/br_muut/js/83.d3a9fed7e5c415cc744d.js","bf285872371c565882ae9f4cee47b217"],["/br_muut/js/84.d3a9fed7e5c415cc744d.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/br_muut/js/85.d3a9fed7e5c415cc744d.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/br_muut/js/86.d3a9fed7e5c415cc744d.js","98e91ea6c0674a452955cacd84a6eaf8"],["/br_muut/js/87.d3a9fed7e5c415cc744d.js","a79bd94d22bc7eeb339ef092754d5666"],["/br_muut/js/88.d3a9fed7e5c415cc744d.js","b033a7729314ea2cfa83648cf43e79ce"],["/br_muut/js/89.d3a9fed7e5c415cc744d.js","4c3ac5463da3739906c686e84d052892"],["/br_muut/js/9.d3a9fed7e5c415cc744d.js","5ca48841c7356e5d5f6598ea5a968be6"],["/br_muut/js/90.d3a9fed7e5c415cc744d.js","495cbf6fd15cb56829ecb4d581131d92"],["/br_muut/js/91.d3a9fed7e5c415cc744d.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/br_muut/js/AccountSignupModal.d3a9fed7e5c415cc744d.js","7b45934e21847b85bc9b77f356ab6149"],["/br_muut/js/account-info.d3a9fed7e5c415cc744d.js","97cc82b12bd0ddafdf15baab2a5f3459"],["/br_muut/js/bot/1-e6c3e5.bot.js","045be21c2d8a6ee16339dab147a269ec"],["/br_muut/js/bot/10-dea975.bot.js","2650dcf180ddff274acd53ba9f416dd5"],["/br_muut/js/bot/11-d2d46e.bot.js","e9d376a809c9318cd13fdf3a86326d90"],["/br_muut/js/bot/12-41e065.bot.js","30c33b273e204d475d55cf3d2d928126"],["/br_muut/js/bot/13-1b0a73.bot.js","8e73d3f10e32c4509b67e21fdefbfcd3"],["/br_muut/js/bot/14-a168c0.bot.js","387aa5fecf0c74184fcc29ebb2291868"],["/br_muut/js/bot/15-b20bd3.bot.js","72c5b7f39fe5e771cb2e6073eddc6ba7"],["/br_muut/js/bot/16-23c22e.bot.js","bc35fea36d22f8dc47bc59139e4194fc"],["/br_muut/js/bot/17-8ec14a.bot.js","452a4602be1af23dd36439c297c68e2d"],["/br_muut/js/bot/18-645c2c.bot.js","a57ddd18212d99b7ad5f222809ce3439"],["/br_muut/js/bot/19-7a274f.bot.js","779ce5805c71fc322b5eae142402210b"],["/br_muut/js/bot/2-f6455f.bot.js","05b4bf6055a367d772afd71b16c203cf"],["/br_muut/js/bot/20-ef8795.bot.js","4e0bdd3bcca0a7c1a8e9fa978bbc0b48"],["/br_muut/js/bot/21-af6db0.bot.js","b5c4fa6f9ab47d8fa38d9e854457c561"],["/br_muut/js/bot/22-f4f3e7.bot.js","e2d6dc72b3414f1517ffaf4380f90070"],["/br_muut/js/bot/23-cb8064.bot.js","731e9d13e9d67233a6b523b467e5c838"],["/br_muut/js/bot/24-ac4fbe.bot.js","cb1b979f04ff150d31133620cd4944a3"],["/br_muut/js/bot/25-4fbd4d.bot.js","da60345b10a35f72b9568bb765deed04"],["/br_muut/js/bot/26-ca5cdd.bot.js","077080879c147d5845ac0e4b3ea51079"],["/br_muut/js/bot/27-b4839f.bot.js","9ac652db7ad34c784e959e400233ec64"],["/br_muut/js/bot/28-d7d6e6.bot.js","f4819bac0c3ee3993937de5c1d9f2f9a"],["/br_muut/js/bot/29-d27f9f.bot.js","b557a7aca9df6991b5ce1b2a39b1d0ca"],["/br_muut/js/bot/3-e50b7d.bot.js","f9c7baa30b51b224c067404a61179c26"],["/br_muut/js/bot/30-bc4797.bot.js","2aabf08e25f41aa303d82e214605d2f1"],["/br_muut/js/bot/31-04707d.bot.js","96ce0460426539067a8df946ebbd1895"],["/br_muut/js/bot/32-78abaa.bot.js","4eea58ee7ed0d41d925d37e820c4313b"],["/br_muut/js/bot/33-0109fd.bot.js","a506e82b49d29bff704fdc7c7eb17e62"],["/br_muut/js/bot/34-c2128e.bot.js","c988b5873e05d3d6ea8d9350ac4df0cc"],["/br_muut/js/bot/35-496069.bot.js","9c573124afaa604443517233c0857b05"],["/br_muut/js/bot/36-b66543.bot.js","45e2145763d28ec8c5cc0d6580bb3a54"],["/br_muut/js/bot/37-cfefc6.bot.js","6508cae9da694af1c25c62344634dfa5"],["/br_muut/js/bot/38-2667ed.bot.js","e9c176fc1a90a80d3291d633a3d9fd5e"],["/br_muut/js/bot/39-db58d1.bot.js","d313503f37abdbd72c25fd7ee973d6e8"],["/br_muut/js/bot/4-d21a2a.bot.js","1d0cea87cabc23990c1b23fed995b0d2"],["/br_muut/js/bot/5-c78e6c.bot.js","2b075f0343545ed070edbc84604c8cf1"],["/br_muut/js/bot/6-a26830.bot.js","41828691683b52731114fb62fc3ebc04"],["/br_muut/js/bot/7-462ba0.bot.js","56338ad095237ea1312d0412e70d653b"],["/br_muut/js/bot/8-fe9fdd.bot.js","d78127eaabbe666aa5ceb3fe16f42014"],["/br_muut/js/bot/9-f6803b.bot.js","fbd8f4c369a6e12bd28fb2cf0beee52a"],["/br_muut/js/bot/bot-sprite.svg","9f528949087aba08d7f7c006215f0cbf"],["/br_muut/js/bot/bot.css","66cb4aae952801292e6985de637c6f6e"],["/br_muut/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/br_muut/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/br_muut/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/br_muut/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/br_muut/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/br_muut/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/br_muut/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/br_muut/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/br_muut/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/br_muut/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/br_muut/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/br_muut/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/br_muut/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/br_muut/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/br_muut/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/br_muut/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/br_muut/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/br_muut/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/br_muut/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/br_muut/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/br_muut/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/br_muut/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/br_muut/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/br_muut/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/br_muut/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/br_muut/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/br_muut/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/br_muut/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/br_muut/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/br_muut/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/br_muut/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/br_muut/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/br_muut/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/br_muut/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/br_muut/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/br_muut/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/br_muut/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/br_muut/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/br_muut/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/br_muut/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/br_muut/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/br_muut/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/br_muut/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/br_muut/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/br_muut/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/br_muut/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/br_muut/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/br_muut/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/br_muut/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/br_muut/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/br_muut/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/br_muut/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/br_muut/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/br_muut/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/br_muut/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/br_muut/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/br_muut/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/br_muut/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/br_muut/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/br_muut/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/br_muut/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/br_muut/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/br_muut/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/br_muut/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/br_muut/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/br_muut/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/br_muut/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/br_muut/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/br_muut/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/br_muut/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/br_muut/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/br_muut/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/br_muut/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/br_muut/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/br_muut/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/br_muut/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/br_muut/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/br_muut/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/br_muut/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/br_muut/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/br_muut/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/br_muut/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/br_muut/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/br_muut/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/br_muut/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/br_muut/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/br_muut/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/br_muut/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/br_muut/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/br_muut/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/br_muut/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/br_muut/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/br_muut/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/br_muut/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/br_muut/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/br_muut/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/br_muut/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/br_muut/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/br_muut/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/br_muut/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/br_muut/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/br_muut/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/br_muut/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/br_muut/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/br_muut/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/br_muut/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/br_muut/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/br_muut/js/bot/xml/toolbox.xml","c87fa27201bacbeaa322f4ee8c76a5a1"],["/br_muut/js/main.d3a9fed7e5c415cc744d.js","777ad2de8280ec409cc6d46fe638afa0"],["/br_muut/js/modals.d3a9fed7e5c415cc744d.js","931a0fbb29b685d77b3c1f5cefd236bf"],["/br_muut/js/push-notification.d3a9fed7e5c415cc744d.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_muut/js/settings-language.d3a9fed7e5c415cc744d.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_muut/js/settings-theme.d3a9fed7e5c415cc744d.js","6eaaf71400718836d70fd48a5888ed6e"],["/br_muut/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/br_muut/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/br_muut/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/br_muut/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/br_muut/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/br_muut/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/br_muut/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/br_muut/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/br_muut/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/br_muut/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/br_muut/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/br_muut/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_muut/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/br_muut/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/br_muut/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/br_muut/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/br_muut/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/br_muut/js/toggle-menu-drawer.d3a9fed7e5c415cc744d.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_muut/js/vendors~account-info~~e180cbd1.d3a9fed7e5c415cc744d.js","2800e04e2b8a216e0b28c02643d1378d"],["/br_muut/js/work-in-progress.d3a9fed7e5c415cc744d.js","694c057ec7838bb4b68034d289016484"],["/br_muut/manifest.json","9887681b29686d2067044d2a8f208ce1"],["/br_muut/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_muut/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_muut/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_muut/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_muut/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_muut/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_muut/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_muut/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_muut/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_muut/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_muut/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_muut/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_muut/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_muut/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_muut/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_muut/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_muut/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_muut/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_muut/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_muut/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_muut/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_muut/';
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






