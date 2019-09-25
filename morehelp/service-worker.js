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

var precacheConfig = [["/morehelp/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/morehelp/css/app.css","1a73fa756a716adaa435e38492c2093e"],["/morehelp/css/bot.css","97dee0b5be64e6f03aeaf4ec958c5587"],["/morehelp/css/modals.css","8436b2cbe78fb78afb09699570f17869"],["/morehelp/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/morehelp/css/work-in-progress.css","fa8b7a307d53425ecd2265791df73b5f"],["/morehelp/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/morehelp/index.html","7fce64b6e1ae030cae465ed840db42b2"],["/morehelp/js/0.3a80461a09146ec0d42a.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/morehelp/js/1.3a80461a09146ec0d42a.js","d5b227514040f9243fd1bd65d8f4d25e"],["/morehelp/js/10.3a80461a09146ec0d42a.js","751de4c79083a2ec085f5657e7a3be84"],["/morehelp/js/11.3a80461a09146ec0d42a.js","b9f3f7bd369081d485c5a505f295c43c"],["/morehelp/js/12.3a80461a09146ec0d42a.js","4240972ecd2a9c60f7a861349bda3abc"],["/morehelp/js/13.3a80461a09146ec0d42a.js","27c08e553da23f76336673f969868de6"],["/morehelp/js/14.3a80461a09146ec0d42a.js","cc88ae1128218b4d7ffb73a9a5edc5af"],["/morehelp/js/15.3a80461a09146ec0d42a.js","98f03eb56745ceaf0bd1a093f33e98c2"],["/morehelp/js/16.3a80461a09146ec0d42a.js","dfeaa69a837d4f00802b07fcd9cc0abd"],["/morehelp/js/17.3a80461a09146ec0d42a.js","9289b22ae19e0d3a0f7046c462a601bd"],["/morehelp/js/18.3a80461a09146ec0d42a.js","0a45feb945f313a0e1fa016842c030bb"],["/morehelp/js/19.3a80461a09146ec0d42a.js","f8c91b6f5020685476adfcb81387882d"],["/morehelp/js/2.3a80461a09146ec0d42a.js","e094c75826ae51075cb79a2d8e515cae"],["/morehelp/js/20.3a80461a09146ec0d42a.js","4264b25b2877ac70f0d5a0e024eb09de"],["/morehelp/js/21.3a80461a09146ec0d42a.js","8928e4241bdaadc6d199fb47e10c66f5"],["/morehelp/js/22.3a80461a09146ec0d42a.js","ef5bdfa6d80889af34286ce2171bd3e1"],["/morehelp/js/23.3a80461a09146ec0d42a.js","16a0788f9067ca749b18c5c364faeff8"],["/morehelp/js/24.3a80461a09146ec0d42a.js","2e326919939a7c1f6baf7fce4f937a51"],["/morehelp/js/25.3a80461a09146ec0d42a.js","b67f3e192d6414c8a0daa7f5e8bdf439"],["/morehelp/js/26.3a80461a09146ec0d42a.js","96046d2e1d1747741274b983a190f9e9"],["/morehelp/js/27.3a80461a09146ec0d42a.js","f84499093749802ded54d4f2ec41f046"],["/morehelp/js/28.3a80461a09146ec0d42a.js","319878cda9e494ab160662c8f50cecdc"],["/morehelp/js/29.3a80461a09146ec0d42a.js","78f53983e05c2a95a33577c05176f7d7"],["/morehelp/js/3.3a80461a09146ec0d42a.js","684cbdefdffa09869a7426a6ac62db21"],["/morehelp/js/30.3a80461a09146ec0d42a.js","83c2dcbafc186b664a6d01d8dd43b029"],["/morehelp/js/31.3a80461a09146ec0d42a.js","926140a3f7f662052cb50da0276017b7"],["/morehelp/js/32.3a80461a09146ec0d42a.js","03da3fe7fdcadde6e01102bcb1c613c5"],["/morehelp/js/33.3a80461a09146ec0d42a.js","998c1ffa642a90b8641b6f55772040e0"],["/morehelp/js/34.3a80461a09146ec0d42a.js","c70e0c81cc95f1abb098ab39e711dc34"],["/morehelp/js/35.3a80461a09146ec0d42a.js","9fc599df25c8e85f807c1bc24a1b2bc5"],["/morehelp/js/36.3a80461a09146ec0d42a.js","102db0aede7c7df83f17907141f50e93"],["/morehelp/js/37.3a80461a09146ec0d42a.js","0daa79c8a88d1a8e42d0e989b585f84f"],["/morehelp/js/38.3a80461a09146ec0d42a.js","271f10f907394e9a3b42218e279d891f"],["/morehelp/js/39.3a80461a09146ec0d42a.js","cc3291623f9565fa3edf2cd29b7584a2"],["/morehelp/js/4.3a80461a09146ec0d42a.js","0b3bc2d1d6bad7e4f35e2045032ff355"],["/morehelp/js/40.3a80461a09146ec0d42a.js","443d39d07665f7b19e006fffe326d7cd"],["/morehelp/js/404.3a80461a09146ec0d42a.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/morehelp/js/41.3a80461a09146ec0d42a.js","2c47e3542c94d08cb5a95577599035ea"],["/morehelp/js/42.3a80461a09146ec0d42a.js","5f81fa9f1dd6c9f777654777c6defc95"],["/morehelp/js/43.3a80461a09146ec0d42a.js","6e5c226e729aa712995c1c22bf49b9f9"],["/morehelp/js/44.3a80461a09146ec0d42a.js","5af50d6a09dd5e77a5c202629713727e"],["/morehelp/js/45.3a80461a09146ec0d42a.js","0a01cfded9c36b4f72da7664014ce09a"],["/morehelp/js/46.3a80461a09146ec0d42a.js","9d9f6fb1066c48e91a5d9ea8ad31f9d7"],["/morehelp/js/47.3a80461a09146ec0d42a.js","ac21399928cce977d2fd64c81450493c"],["/morehelp/js/48.3a80461a09146ec0d42a.js","fed012001a93f3ab0f2d5a067048b235"],["/morehelp/js/49.3a80461a09146ec0d42a.js","1625b2a663b2fe781471c7e83754490b"],["/morehelp/js/5.3a80461a09146ec0d42a.js","488e6b8594547e2b3e733cb70dbc0a99"],["/morehelp/js/50.3a80461a09146ec0d42a.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/morehelp/js/51.3a80461a09146ec0d42a.js","4b628b10f2d5b405079d00b68b49066f"],["/morehelp/js/52.3a80461a09146ec0d42a.js","ea53befbc15fd32a17a123c66e9516be"],["/morehelp/js/53.3a80461a09146ec0d42a.js","24915e62a944043f178a28a94939f02f"],["/morehelp/js/54.3a80461a09146ec0d42a.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/morehelp/js/55.3a80461a09146ec0d42a.js","11bb74750638ce9cfa9be687866ab198"],["/morehelp/js/56.3a80461a09146ec0d42a.js","dd6e15302e295e8a162d041d0dd132ae"],["/morehelp/js/57.3a80461a09146ec0d42a.js","be49051fc95706d04fd32b84d83ae678"],["/morehelp/js/58.3a80461a09146ec0d42a.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/morehelp/js/59.3a80461a09146ec0d42a.js","4f275a0da12e986fa0e90b34713d7e78"],["/morehelp/js/6.3a80461a09146ec0d42a.js","8bcdab92cb6767f385f2aecbfe67596f"],["/morehelp/js/60.3a80461a09146ec0d42a.js","0faabad8e465298e40927e937adfa32d"],["/morehelp/js/61.3a80461a09146ec0d42a.js","8235dfe44363431a4a591d7c63a9e9f8"],["/morehelp/js/62.3a80461a09146ec0d42a.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/morehelp/js/63.3a80461a09146ec0d42a.js","e88eeddbea7dc182514dfa70e49770b2"],["/morehelp/js/64.3a80461a09146ec0d42a.js","3060133f9778cae20cd5a16d87d88e7f"],["/morehelp/js/65.3a80461a09146ec0d42a.js","dca94a266c37ab45bc5795a209a1569d"],["/morehelp/js/66.3a80461a09146ec0d42a.js","a09b3211a4d1d88e373d708b90106e98"],["/morehelp/js/67.3a80461a09146ec0d42a.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/morehelp/js/68.3a80461a09146ec0d42a.js","ead2b3320618499ddc75c160130a9ff5"],["/morehelp/js/69.3a80461a09146ec0d42a.js","9c5378c25efd5362aa8fa268c4419176"],["/morehelp/js/7.3a80461a09146ec0d42a.js","ee4646876d58a5d754e25c67a0a830c2"],["/morehelp/js/70.3a80461a09146ec0d42a.js","c1e9bae8923c603e670412f72f974e8c"],["/morehelp/js/71.3a80461a09146ec0d42a.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/morehelp/js/8.3a80461a09146ec0d42a.js","10670c38175d043949136ed9e0a01222"],["/morehelp/js/9.3a80461a09146ec0d42a.js","9a1d4afddfe336fe59dbeb13c706e606"],["/morehelp/js/DenialOfServiceModal.3a80461a09146ec0d42a.js","bca386b2f999825539a0f2ed694e34b2"],["/morehelp/js/MarketUnavailableModal.3a80461a09146ec0d42a.js","78a067dd7dc79f699d02ca255e49390a"],["/morehelp/js/ServicesErrorModal.3a80461a09146ec0d42a.js","cb4569407fe835a6b6950689f92388b0"],["/morehelp/js/UnsupportedContractModal.3a80461a09146ec0d42a.js","58ba2eb5480fe0cffb915d9e286cab1f"],["/morehelp/js/account-info.3a80461a09146ec0d42a.js","990a5160356fee546b034842aa6edfb5"],["/morehelp/js/bot/1-045b44.bot.js","cfbf6a6678e5a05085b1c92a9e5be9a8"],["/morehelp/js/bot/10-a714d7.bot.js","61523fbba332b9c05d602c67e22aa1c1"],["/morehelp/js/bot/11-991702.bot.js","dbb3a56cb461f1d00a12f134f914c8af"],["/morehelp/js/bot/12-98ebae.bot.js","94eff2709d2790af5e90feeabd0bb2fc"],["/morehelp/js/bot/13-1fbd27.bot.js","47eeb2cce96271f47ada3754b7b0ffaa"],["/morehelp/js/bot/14-d2397d.bot.js","32f08ccb21ac8b37d37f473ecc8c091a"],["/morehelp/js/bot/15-51b430.bot.js","1b98b041cea97fc6d051e28f14546e78"],["/morehelp/js/bot/16-f0e338.bot.js","a1a796ea141dc4b769bfd8335656f537"],["/morehelp/js/bot/17-98769e.bot.js","d7b1fd03712193abe1ced7a9c18a141c"],["/morehelp/js/bot/18-08f154.bot.js","b45a28baa06aaf9eb50449c380f9f105"],["/morehelp/js/bot/19-a09225.bot.js","5a5b49d54668424e44978a6d9f4c36d4"],["/morehelp/js/bot/2-d3cda7.bot.js","547edc00303229f8707b11782e738ed5"],["/morehelp/js/bot/20-c0da15.bot.js","4ff9cfe88286fa0bd977e6a8aefaf17a"],["/morehelp/js/bot/21-e1e665.bot.js","3b1933b3d97279f7e1a0c32cae5b4b86"],["/morehelp/js/bot/22-4c5e14.bot.js","0ca0c2242dfd6f3cf7a10a1b8d371ad0"],["/morehelp/js/bot/23-d316b6.bot.js","bceb0ebd0dcfaaa7ef15d1ece2fd0d76"],["/morehelp/js/bot/24-4a6fd4.bot.js","54488d1c98e777b24d1c6a343770a8ea"],["/morehelp/js/bot/25-24f13e.bot.js","c42ae14f932eab70ad4d0d4509478b9b"],["/morehelp/js/bot/26-a22baf.bot.js","c07113a586a59758ea8cc14088891d7c"],["/morehelp/js/bot/27-0e277b.bot.js","dd862cc7b57508e23611e39ab5ad04f0"],["/morehelp/js/bot/28-2651af.bot.js","3c62d1b9a2411553e871558953a6539b"],["/morehelp/js/bot/29-25e1ed.bot.js","efde3dae20127889e47bd491470d88c3"],["/morehelp/js/bot/3-fd11c6.bot.js","50bc26ef02cbb9ae2423da8a51ddb84d"],["/morehelp/js/bot/30-92e306.bot.js","6b25383ac6f3713cfbcc11241daa36b4"],["/morehelp/js/bot/31-dd7055.bot.js","c4a5307a54e186100f6a8f6d2cdd672d"],["/morehelp/js/bot/32-286726.bot.js","8c38a84de47e5de165911aa105b333be"],["/morehelp/js/bot/33-bbf4e7.bot.js","c4ba059e55aa4f8221d2590510990b6a"],["/morehelp/js/bot/34-942f79.bot.js","2d561a30071d0ef3639bcdbf5a8ae85f"],["/morehelp/js/bot/35-5a453c.bot.js","924c93ce7a82bcdb5b3b02cb60e14c2d"],["/morehelp/js/bot/4-d2a52b.bot.js","8b9cdc7adff5365ad574c2adbfc82eb8"],["/morehelp/js/bot/5-519e4f.bot.js","6070f90e053136471505a6b30e0d6ba5"],["/morehelp/js/bot/6-fcc519.bot.js","508c5fb9c585ba9044ced613627c8b2e"],["/morehelp/js/bot/7-197ccd.bot.js","d318e174a9be0ce12c82d7304eaa3f07"],["/morehelp/js/bot/8-7d1181.bot.js","c0f15e77a57fc9bfb74e9fd9c37744a6"],["/morehelp/js/bot/9-0fc2a0.bot.js","8d96073c4508e00b6c11e5c8f1d20eeb"],["/morehelp/js/bot/bot-sprite.svg","ed0fc4f5569aa55bb7977349c5e41634"],["/morehelp/js/bot/bot.css","97dee0b5be64e6f03aeaf4ec958c5587"],["/morehelp/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/morehelp/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/morehelp/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/morehelp/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/morehelp/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/morehelp/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/morehelp/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/morehelp/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/morehelp/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/morehelp/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/morehelp/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/morehelp/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/morehelp/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/morehelp/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/morehelp/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/morehelp/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/morehelp/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/morehelp/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/morehelp/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/morehelp/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/morehelp/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/morehelp/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/morehelp/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/morehelp/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/morehelp/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/morehelp/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/morehelp/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/morehelp/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/morehelp/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/morehelp/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/morehelp/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/morehelp/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/morehelp/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/morehelp/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/morehelp/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/morehelp/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/morehelp/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/morehelp/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/morehelp/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/morehelp/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/morehelp/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/morehelp/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/morehelp/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/morehelp/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/morehelp/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/morehelp/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/morehelp/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/morehelp/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/morehelp/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/morehelp/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/morehelp/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/morehelp/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/morehelp/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/morehelp/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/morehelp/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/morehelp/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/morehelp/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/morehelp/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/morehelp/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/morehelp/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/morehelp/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/morehelp/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/morehelp/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/morehelp/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/morehelp/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/morehelp/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/morehelp/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/morehelp/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/morehelp/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/morehelp/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/morehelp/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/morehelp/js/bot/xml/main.xml","9d082c13c03906d4e6f399764b65cb03"],["/morehelp/js/bot/xml/toolbox.xml","f6820a177ed66ff54410d53e958f6ee1"],["/morehelp/js/main.3a80461a09146ec0d42a.js","52cc66978abf214d2c204abd3e88c5e2"],["/morehelp/js/modals.3a80461a09146ec0d42a.js","49e882f9bc62bd48395653fb4b75ba09"],["/morehelp/js/push-notification.3a80461a09146ec0d42a.js","0b12df6e5ba12101d9d791943e5994ca"],["/morehelp/js/settings-chart.3a80461a09146ec0d42a.js","affa35d00136723a3026be5b30c0c299"],["/morehelp/js/settings-language.3a80461a09146ec0d42a.js","0c731935668f644467cefdc4e9b95754"],["/morehelp/js/settings-theme.3a80461a09146ec0d42a.js","636b375e93c4876f9ef7fb914161c417"],["/morehelp/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/morehelp/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/morehelp/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/morehelp/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/morehelp/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/morehelp/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/morehelp/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/morehelp/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/morehelp/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/morehelp/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/morehelp/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/morehelp/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/morehelp/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/morehelp/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/morehelp/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/morehelp/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/morehelp/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/morehelp/js/toggle-cashier.3a80461a09146ec0d42a.js","b85412f0a1df1df3627ec4a528dc3d73"],["/morehelp/js/toggle-menu-drawer.3a80461a09146ec0d42a.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/morehelp/js/wallet-information.3a80461a09146ec0d42a.js","336d02e07984b18d01a8473503d91f8d"],["/morehelp/js/work-in-progress.3a80461a09146ec0d42a.js","5c3da436fe88eff0cc1eb4faad3925e5"],["/morehelp/manifest.json","b9c7dad48673a946c9e568bff944294b"],["/morehelp/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/morehelp/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/morehelp/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/morehelp/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/morehelp/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/morehelp/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/morehelp/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/morehelp/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/morehelp/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/morehelp/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/morehelp/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/morehelp/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/morehelp/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/morehelp/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/morehelp/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/morehelp/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/morehelp/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/morehelp/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/morehelp/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/morehelp/robots.txt","6978a616c585d03cb5b542a891995efb"],["/morehelp/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/morehelp/';
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







