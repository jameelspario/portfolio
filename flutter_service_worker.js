'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e23340a56ffa878108dc782c30c4e9c2",
".git/config": "b33a1d1bbb98ff9dec8f27e2f134e2b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb4ea4417012fc1029d873f300b04803",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed0c93b60da4d40e1235f1876fc621a3",
".git/logs/refs/heads/master": "ed0c93b60da4d40e1235f1876fc621a3",
".git/logs/refs/remotes/origin/master": "1e06b5e2bf28826a9eb14d166283f0ec",
".git/objects/02/fa9ee28000c97f1cd75e96abc87168cec373b0": "7e588f8a13468149a73767debe4d2fe2",
".git/objects/04/8d84f085ae4157c3d0645e84278161d50d1c95": "f1289f1ea5ee0266c0b6ad20a922430e",
".git/objects/09/55092bfa2c5dd429cf4c99523946eecade8883": "a6b4269edc1c8c4c2d9c1eeb0623d951",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/a4015fff2a50958f07ccef7337ae69bdba4564": "cab8e3e186abc1ca0f890fc6224b4908",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1b/c9fd686eda463f8deb7c54334ed3120c3d1129": "41f0e8c2a6f7d6a886892d3a925a133e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3436fdfe662ca8fe6521046b24b434b5cb985a": "184aaf1617bab7339e933565440444d0",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/32533650b258b9d26299163226cdaef7a9e725": "538c301b9eb6164e95f47c3419b769f4",
".git/objects/22/34669920fc40f99c35b1e733502bbeb3f743a1": "5d1dff07f893cfe52afc802aece84931",
".git/objects/23/c06aa223b17ff4cc8883ce7b18e7cfc66ae79c": "e16851b4e7316dfba3c4df131dda3cd2",
".git/objects/23/c29fcdf747e3e677f0022ce3c37e387e0dfaa3": "b16a4d1db8b235d1d77ce8ad7f652f69",
".git/objects/24/38e00b0a89db4c950262b6d4ca4c2087a98b14": "3e53fcfc9ffb3a5c72ffc76e84f4f3be",
".git/objects/29/f294c6a871833cc6521b1e8fbe3115e5434cff": "5588b27763b63c7952311369f9524a54",
".git/objects/2a/c235906eb5d94b2a939ceee6ee0b1bf6aec333": "2d656c27e31c4913fe8acdb2137f2609",
".git/objects/30/d357006bb94bee42cb6574d601c28806e31a3a": "76814c5337ec0d7caf240b47f4d585b4",
".git/objects/3d/c9b8a111bc3b581052632dc4fab21d1f4f6402": "d17027799006a165bdf521017cef8def",
".git/objects/3f/a4734cd582239c017a56c3b5b0cd518c186003": "d234cfa90a0817ae764f4fbd5ad740f3",
".git/objects/41/8f6b90e851735b1513109872d56e83852fe6ff": "2f49c28278bc08d325c07c1fe716843e",
".git/objects/43/1084295f472af8dc0760f421ae5766308d58f5": "a24315c1d05bf44547ab6e3a43f645a7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b1a45292d644b29c465592fe6c3490311c99b0": "dedf29fd79888b5740fd1b8413c1bf69",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/97fa88accea9c2056fa1827925786321aa57bd": "871904eae3a2a00f27ffe46bb111ed28",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/5c08221a00b14fd5c267604b79d9dd6c721670": "34a3e5a5117cae5a7b31c3f2fa01ee17",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/98a467350bc6d4f646c74e1f8881a53bebd834": "855fcf458c18232776d32aae528c899d",
".git/objects/5b/b917d2e0610f05f0552442b56b2bde2f230997": "3a52b51eeca37456b773f52d7549cd5d",
".git/objects/5b/c586dcf2fd24fdcfcc654c2fda60af11177657": "c1d98e53e53e2f08f139701a9565ab68",
".git/objects/5c/26ea17b7d1f214028dfb49eb8896cbb2578108": "e1587adf6df30c4b61113cd737b78b0b",
".git/objects/5c/3b831166e2a96a4cf163a257f1c71966b2032a": "4a7d6c0ff63854cfd22b073927ea22f7",
".git/objects/61/9ee626cf109f0660705c7691a5715fcee7b75d": "acbc7f53ce4ea4258e57cdb037043eac",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/24ede77a8a4204c253dc0f3fc55331ec40fd46": "c03865c1d0c46924f7f70cf4c39e7802",
".git/objects/67/205535d699c91f1eb4580606c11b7c4b754f25": "648d93e03a4027fad6bf46950622d229",
".git/objects/67/fffdd0a23e05f7718a097bbcf1be2f847578d7": "3df3b36fc0795b9a226b17935bc9f682",
".git/objects/69/455c8462c6bb57b170d9be968d79d7ce827469": "be2fec744976ba642114555a28ae79c2",
".git/objects/6d/b0c8bc448cbac1642f2da7110223ea9c02daac": "1ec612cc22d0fb9f5184e9f97224a1c0",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/79/134bf6c2b8ad2ec013c1733b6ef2b9e4eaf482": "997fff4f320bd8f09dbc9353a95c8829",
".git/objects/7a/b7349c1f9e4120e3aa23e54a999c92f21fc2db": "8ef9674de9f2e012a988b086ca1341f3",
".git/objects/7a/b7624a7f069f9ffbededbd3315c0eaa640511a": "03e23f97912d28710e148e6b0e23125d",
".git/objects/7c/362a2fcd6dc1524e972eccd7293a73bfc5be20": "ed0aca4710a9bcb9265f4f53c654573d",
".git/objects/80/2b1f42a4a85f7c5c109f1d74fc91761d0d098c": "639e0f5fe4d5aaddc9010e79b27e8ee4",
".git/objects/84/287ed848b9997fe0980fdcffbe0cd9678a39cd": "d0c387635e5b75271d6567035093fdd4",
".git/objects/85/2796c05b3fabb7a9a396d6dff0ce2b508a7f36": "ad516f1956345ffaddacb90eac76b7a0",
".git/objects/86/bf1dddeeee8ee9b25f79439f6ed7e2f1252fae": "ea83bf4683df251f52cd8716a92291ed",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4e2b967694b38b6bc6e3fc8030c65ea17dd29b": "83165762e914b89cb0f355886a6bb63b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7db8680264ad219ca4bd13e51764b6ffe9baea": "7293fcc2e8dd621876dbee4150c49080",
".git/objects/8f/20ab9a4fe2a7f012a22b56652bc003dc8918c2": "71cf780830fcdb64996d922b0f69e89c",
".git/objects/92/7cf6bda5b72a60b0998c18cc8024b20caae664": "27b09bb14e6527735c39df8cd05ba06e",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/5ed1aedbefacb02283df7c00e86bb551208c67": "e34d58ae9d50dbba5c0bc2faa2fc9b45",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9e/479f760125bd9a577930a4508487f82eea82fe": "41a3e0a13aa9ff01b1fa6f0ad545b8e7",
".git/objects/a2/16ffdbe901e738cccf65912e8e64004b63cf6f": "86825115261cd3f70c53d6821ba0947e",
".git/objects/a5/0a15e00ba514d87e89a3d9a3e0e94a7fc4ed6b": "9eeec8b3d473b1582bb1b59eb45e9bb5",
".git/objects/a7/fd49d86d2baae21d2e2f16d90bd3dd9fdca849": "b9f14259fa8f8d7d0f0d9ff1baa6300e",
".git/objects/aa/88791e56ad0949ff2c5fd60d540e62436d8c53": "2170740874b899778f86eeee158bd2f3",
".git/objects/ad/96a8621f4d11caf289142963d599ab43f984af": "fbea2f4f2b0d6a2a173ada1b651c08b6",
".git/objects/b2/866e1f6d5eae1d37a4deac5603fffb69f51be7": "73fa6e17a2b480f62896970c4584a282",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/95a7ef1dcf5fecbb3dd75c50af65ffb32d27b4": "e6f5128ca902d1838615f32b0ff04f16",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/a66738ae67cc469d174a6f71ec28a44ef0a5df": "60e6d67c796c6df74775570a6aa12e16",
".git/objects/bd/db6355d03d35bb11594f70c2f0843077811d9e": "a3ce91ae0f149e1b30b9ff0646e7b43d",
".git/objects/c3/8600081619432abe9b9ecfd44352c2b1253be1": "ebe8bd92a1a5f4e1e3a9b33f067bd6c9",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/39b78311a6472519182d919a4ae3c5e69f9b1e": "11f7d08744efc6ffc6f7599b9f351e2c",
".git/objects/ce/866f290d9101298fda2078c282f513763c0ef6": "e82c5a44a86655d2fdb16f2468b5f744",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/8f450cc61a202e25d41811ab1e20dcd2d4e2fc": "c074e2069a1b34b4a7e276d549adc599",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/d8994ccb2f064139c05ef1b641645c45bf816a": "dd4ac1eec1c44e885d8c4d6cea566746",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/0c4ca7a5408c85ada101ad3294942afaeb10c7": "fb46bbc6eb682697bc33194481fd83aa",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/f25a47c1fed78c0ed5aacf763797b6e0f093e8": "8a5d01f9601c9a7b018f542990a67b91",
".git/objects/ea/63d28aa558c9469d7028ac07a7f0abb9dc9914": "c3a6c86f538b24f70e617ddf1d6882a5",
".git/objects/ea/92efad5279bf307c1e81fa366d614909d4269e": "298361a6a346d77cb712214754b1449f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4f16d11415e1e87c7d05f6c52ec17ffc4de04c": "67f634a68785feda514a056b9c60ee57",
".git/objects/ef/76817b1efb9af3e0300d3de6b76f40cf5ca251": "5d3cec29de5641b51054adde7d4c69ee",
".git/objects/f1/901a85d9e24054a61c04616a104b7a8b9ab2cf": "00e4aefd1ebd5507b2b1b794ec5135f0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9b1874222b90011fc18cceb093462226b74b90": "b162bef95e4ae67a1201070fbbc211a5",
".git/objects/f4/8fa9d1ed64ad5b421492adc79becb634332add": "f162e49f0e0dc1de912c5b83e315ff8b",
".git/objects/f6/27852bba1a67bf5cc5640d16f32a432310b0f5": "66a00fea5f5bab7e5095e024140180d3",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "635b0cb02d61cf367543b6c7744159b7",
".git/refs/remotes/origin/master": "635b0cb02d61cf367543b6c7744159b7",
"assets/AssetManifest.bin": "4666bd81051945130db1811772f7f1c6",
"assets/AssetManifest.bin.json": "402cbb292785b9f8f83399bbe14c985c",
"assets/AssetManifest.json": "1b318c4756979b00aa5d032902b43937",
"assets/assets/images/android.png": "7c9c21b339f5c13d53a7dd05b08adc77",
"assets/assets/images/android1.png": "2375eb2d107c02931aad0a577a615b0a",
"assets/assets/images/android2.png": "565ba819e6bd15415b8df0b1d62412f3",
"assets/assets/images/appstore.png": "a2770671edf79074662f0b46d555e4bf",
"assets/assets/images/dart.png": "9d3c9866010402554b552d1d7dddbd42",
"assets/assets/images/flutter.png": "e417bcfb1a718192ff6e2aa86799460a",
"assets/assets/images/github.png": "6f9cc8fca9f0051e711c42613d89d630",
"assets/assets/images/gitlab.png": "7c89f541f9d8c6239bce9f4b75589741",
"assets/assets/images/hrscreens/AGC001.webp": "035d1f514561bf5cb1f8075703304460",
"assets/assets/images/hrscreens/AIA001.webp": "996bfebe084c1d591945e02a1ba8ecdf",
"assets/assets/images/hrscreens/flavour001.webp": "f889c12f18be361cd3fc3bb87203b86f",
"assets/assets/images/hrscreens/flavour002.webp": "40e17862ec7e29e006bae941256eea81",
"assets/assets/images/hrscreens/flavour003.webp": "30b1ece9a02a7fff663fb7dea9e929a0",
"assets/assets/images/hrscreens/flavour004.webp": "e23fa9b784040b8b7abede0468320dc2",
"assets/assets/images/hrscreens/flavour005.webp": "0c1a553d03e5497d88051c6304a7b1f0",
"assets/assets/images/hrscreens/flavour006.webp": "8b24d5fff02f29cde50f8fb84dabe4c7",
"assets/assets/images/hrscreens/flavour007.webp": "79fb2716d5b73da1c7b6dfe9477532d2",
"assets/assets/images/hrscreens/flavour008.webp": "e22067aae22f56117e90b7be5f578a61",
"assets/assets/images/hrscreens/flavour009.webp": "0583c0a8ef91c03a536e29a2c3119212",
"assets/assets/images/hrscreens/flavour009b.webp": "c470128b9f011a23be30f4bdc5705f98",
"assets/assets/images/hrscreens/flavour010.webp": "09ff2ae58cb10c86a8bb9300cfa58414",
"assets/assets/images/hrscreens/flavour011.webp": "86cbf405ea252c5da184d454d437a964",
"assets/assets/images/hrscreens/flavour012.webp": "f3babae9cb2ff99dbaac203c529342d9",
"assets/assets/images/hrscreens/flavour013.webp": "ebf9dd9f45da7062567bccc2440289b7",
"assets/assets/images/hrscreens/flavour014.webp": "d8aec44fae9e63da7f6f6c73c75829be",
"assets/assets/images/hrscreens/flavour015.webp": "3ad74c4e1756bb7614136c2e343bbbae",
"assets/assets/images/hrscreens/flavour016.webp": "2c77069d5d9336c2db5a63ab0092a6cb",
"assets/assets/images/hrscreens/flavour017.webp": "fa218cdf51822b45fcc8f52e7af8e32f",
"assets/assets/images/hrscreens/flavour021.webp": "a7572a6d9873678a1bc0d0e2c2ed0465",
"assets/assets/images/hrscreens/flavour022.webp": "44b4da066cf813a85a9187f92364bb08",
"assets/assets/images/hrscreens/HR01.webp": "a50734bcc0baaceb475f881c31d53029",
"assets/assets/images/hrscreens/HR02.webp": "30c4ecee57bf8151d98140b0c9e4c83d",
"assets/assets/images/hrscreens/HR03.webp": "40264e7a706f43cd3211379570a2e531",
"assets/assets/images/hrscreens/HR04.webp": "dc4d4006bbe45c680a5601bb2d4adbd2",
"assets/assets/images/hrscreens/HR05.webp": "627a577ee2ff380383b3aac346d90c49",
"assets/assets/images/hrscreens/HR06.webp": "3b4d9c9b92c5a63c7ed0a9954ba653fc",
"assets/assets/images/hrscreens/HR07.webp": "5fc204ec23cab3365631541b31f44330",
"assets/assets/images/hrscreens/HR08.webp": "3a5a8b4dc0501229e74e624f535fc469",
"assets/assets/images/hrscreens/HR09.webp": "0970a81686c927b19206dc96c2b1cf4d",
"assets/assets/images/hrscreens/SC001.webp": "96e3ff4a3b6b68cc9baaa81dd943a012",
"assets/assets/images/hrscreens/SC002.webp": "84fd122e3dbd7a1fd90b44314ac8e622",
"assets/assets/images/hrscreens/SC003.webp": "03d7878c6dda19850881692ba0930d51",
"assets/assets/images/hrscreens/SC004.webp": "6e369eed67bde0d37d9c89e6f0b35594",
"assets/assets/images/hrscreens/SC005.webp": "5dac4f228f893ceea90850d84043a4e0",
"assets/assets/images/hrscreens/SC006.webp": "e7e3c6c2e2e4e06f5b452bf25b8e1289",
"assets/assets/images/hrscreens/SC007.webp": "b688d8fd456c5f3742620d106adff45e",
"assets/assets/images/hrscreens/SC008.webp": "761001f658a03097130784a6048e0864",
"assets/assets/images/hrscreens/SC009.webp": "4c01fa921b487d8642d4a39854328b15",
"assets/assets/images/hrscreens/SCH0001.webp": "1e6da4fafc0c525b37a842fea47d101c",
"assets/assets/images/hrscreens/SCH0002.webp": "230fbcc6b305cef9049516b6208b21b3",
"assets/assets/images/hrscreens/tc01.webp": "2ba76bc1baf3f93fd0d568a33d4a6689",
"assets/assets/images/hrscreens/tc02.webp": "46a118ff059801f230eb1248ece755cf",
"assets/assets/images/hrscreens/tc03.webp": "45f49264f4230ea25d623d6ef6efc979",
"assets/assets/images/hrscreens/tc04.webp": "c65428d0fa0384b3a0ac682ce9ea960c",
"assets/assets/images/hrscreens/tc05.webp": "9908fc19a3a6592ee2f6fd5baad9c436",
"assets/assets/images/hrscreens/tc06.webp": "41bae1e39b1109ff925c280a5a0ed0cd",
"assets/assets/images/hrscreens/tc07.webp": "8e639b95e7b26f81dface7b398c62211",
"assets/assets/images/hrscreens/tc08.webp": "eac7fa7d6dfce55dc25e68c77ba370db",
"assets/assets/images/hrscreens/tkt001.webp": "1063298ce23235876b015e1a72aac988",
"assets/assets/images/hrscreens/visitor001.webp": "d44a3b217c78189f4433fb6e6db6db54",
"assets/assets/images/hrscreens/visitor002.webp": "5cb78ea669c99cecc4aaba9e1d65424e",
"assets/assets/images/hrscreens/visitor003.webp": "251b3f564b649cab7e90006370bdde71",
"assets/assets/images/hrscreens/visitor005.webp": "37fe58d3e8e03d36f2a1db0546730dbc",
"assets/assets/images/hrscreens/visitor007.webp": "4ca357b4d95de193e640c8a6e50042c7",
"assets/assets/images/hrscreens/visitor008.webp": "f9154d64a2a0e4c6baaa7ebe31bcd18f",
"assets/assets/images/hrscreens/visitor009.webp": "2404dc9a7f06078591a10481999d4941",
"assets/assets/images/hrscreens/visitor010.webp": "a37ebc1912ee85c981791ef3449c2e26",
"assets/assets/images/icon-android-studio.png": "c65f6b93d595331ec362083c1760e6b2",
"assets/assets/images/icon-firebase.png": "4fa388a5508312f6fe76da2cf46c1351",
"assets/assets/images/icon-rest-api.png": "114da2330aa934a4260004fb3107cbb6",
"assets/assets/images/icon-sdk3.png": "e722b8942613c0188876100301e65cae",
"assets/assets/images/icon-vs-code.png": "b7869ab23ef9be0b1501b1a60c439f11",
"assets/assets/images/icon-webrtc.png": "ea93849e4543a33b5e5b357387cc5ec2",
"assets/assets/images/icon-websocket.png": "2ff2d8b1d654e688a442f8492d2bf4f7",
"assets/assets/images/ios.png": "19b05d9a97a36c54e89ad8567e773b8f",
"assets/assets/images/java-small.png": "220615ce77dbe4ed34c729bee3d55dfc",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/kotlin.png": "e0bf6a7fab2c25efd36e8d436556a2b7",
"assets/assets/images/location.png": "5e25b23e8a36e52ceae52ce219981bdf",
"assets/assets/images/playstore.png": "f9a9cc9e593d8e153b1fb6771ce890a4",
"assets/assets/images/resume.png": "31a79a4a7f896e7757a5e7b8fd9f41ee",
"assets/assets/images/sql.png": "9248d403f4914d9fae439a51365da8a9",
"assets/assets/svg/android.svg": "53507b2b9acfa23da1f3cdc317e9bc5f",
"assets/assets/svg/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/svg/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/svg/git.svg": "631bfee78570c6e6931d654cc76b89c8",
"assets/assets/svg/github.svg": "4d56b3683c48ed7c70e76b81fb262a4a",
"assets/assets/svg/info.svg": "920ddb038c83eae9a44b3aec11c8306f",
"assets/assets/svg/internet.svg": "f71ae28c258d71ffd62aa3b8b7cfec48",
"assets/assets/svg/ios.svg": "4a0bb7b3e5ddc5d89d30b54cfdc414e6",
"assets/assets/svg/java.svg": "64f6e32092e90b8a7fb090d3d003ccb1",
"assets/assets/svg/kotlin.svg": "94e0a77ea6158d72c09683facdc057f5",
"assets/assets/svg/windows.svg": "66b45e9216149bedd4772e614b96bb83",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "852ae7c448bc026c1fb8468a19387271",
"assets/NOTICES": "c0bbe9f1a6ef4a0d70a142e385870194",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f2ed0b8f827b7f744c16aec8a7f987fa",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "10dc5186e453c142dbb79a7dce826751",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "2b47445d824ae31488dd09ce8acac14b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
