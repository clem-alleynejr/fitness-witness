require('dotenv').config();
require('./config/database');

const Exercise = require('./models/exercise')

(async function() {

    await Excercise.deleteMany({});
    const exercises = await Exercise.create([
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wymEbxl7j4wKcS",
          "id": "0001",
          "name": "3/4 sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/40MIjQbWlPMGXP",
          "id": "0002",
          "name": "45° side bend",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GSHnjaChMolPiR",
          "id": "0003",
          "name": "air bike",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BQkkGaCiOSHuM-",
          "id": "1512",
          "name": "all fours squad stretch",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BynJT5PJIALJ0a",
          "id": "0006",
          "name": "alternate heel touchers",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jktJYhsuHRglTg",
          "id": "0007",
          "name": "alternate lateral pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wbuvRC0rbO6efX",
          "id": "1368",
          "name": "ankle circles",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0vFvBTY4Xg7vZc",
          "id": "3293",
          "name": "archer pull up",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5W4klkQtKUIdfa",
          "id": "3294",
          "name": "archer push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/l5liaRFQ6aTvum",
          "id": "2355",
          "name": "arm slingers hanging bent knee legs",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3cNj7QJ71nqJlp",
          "id": "2333",
          "name": "arm slingers hanging straight legs",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mbCap0EqEHqGK0",
          "id": "3214",
          "name": "arms apart circular toe touch (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZkseQi7zAW1anR",
          "id": "3204",
          "name": "arms overhead full sit-up (male)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1hauhTsnuLRiK5",
          "id": "0009",
          "name": "assisted chest dip (kneeling)",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zq2JRCqGnz85iz",
          "id": "0011",
          "name": "assisted hanging knee raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3ZQaa9evr8zOfz",
          "id": "0010",
          "name": "assisted hanging knee raise with throw down",
          "target": "abs"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dszkUec80XGBNB",
          "id": "1708",
          "name": "assisted lying calves stretch",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bLo9LzweuxnWcS",
          "id": "1709",
          "name": "assisted lying glutes stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WmI7RfxAjBq29t",
          "id": "1710",
          "name": "assisted lying gluteus and piriformis stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/d8KWL8t24KPr18",
          "id": "0012",
          "name": "assisted lying leg raise with lateral throw down",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4ufCOyLyqC8RSl",
          "id": "0013",
          "name": "assisted lying leg raise with throw down",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZMuWa4lMpVvBih",
          "id": "0014",
          "name": "assisted motion russian twist",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2a5qKWoEpMsZkW",
          "id": "0015",
          "name": "assisted parallel close grip pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ASllFCDO62wazs",
          "id": "0016",
          "name": "assisted prone hamstring",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YHY0zIGqHJsD33",
          "id": "1713",
          "name": "assisted prone lying quads stretch",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lUGyKtyDkKXqcn",
          "id": "1714",
          "name": "assisted prone rectus femoris stretch",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oqko3jueDgY3Wy",
          "id": "0017",
          "name": "assisted pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aumAMg1paqjyzq",
          "id": "1716",
          "name": "assisted seated pectoralis major stretch with stability ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RW-4kHz6Yw-5J9",
          "id": "1712",
          "name": "assisted side lying adductor stretch",
          "target": "adductors"
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2HOWxUnRTu0FHw",
          "id": "1758",
          "name": "assisted sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QZViwJ1NyWa-5O",
          "id": "1431",
          "name": "assisted standing chin-up",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/i4OSvc9l3MhJtT",
          "id": "1432",
          "name": "assisted standing pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M0o6yIXugOQTkH",
          "id": "0018",
          "name": "assisted standing triceps extension (with towel)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RpBtJYodFrhag4",
          "id": "0019",
          "name": "assisted triceps dip (kneeling)",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bf8Lq-NIx6B1g6",
          "id": "2364",
          "name": "assisted wide-grip chest dip (kneeling)",
          "target": "pectorals"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kUAAZ21UzV0kn-",
          "id": "3220",
          "name": "astride jumps (male)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ryJ84EndkUHe6N",
          "id": "3672",
          "name": "back and forth step",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/C41IG6h8-1MgjO",
          "id": "1314",
          "name": "back extension on exercise ball",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FdUrD6vGcXfAMO",
          "id": "3297",
          "name": "back lever",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7BpmjQwYfaSuYY",
          "id": "1405",
          "name": "back pec stretch",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/09-AwYZGaaI8bn",
          "id": "1473",
          "name": "backward jump",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ghUQtdG2ucnmL-",
          "id": "0020",
          "name": "balance board",
          "target": "quads"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SrhIdkDK7frjsR",
          "id": "0968",
          "name": "band alternating biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/41KunkcHGVmqiD",
          "id": "0969",
          "name": "band alternating v-up",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CMbeaODxKSG0Np",
          "id": "0970",
          "name": "band assisted pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ik8lBogddSY3S7",
          "id": "0971",
          "name": "band assisted wheel rollerout",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/isVk9LiVfiNXm0",
          "id": "1254",
          "name": "band bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IIKHmcYj4dggsp",
          "id": "0980",
          "name": "band bent-over hip extension",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YOsLMvXIH6yVw8",
          "id": "0972",
          "name": "band bicycle crunch",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZOMvr3MTXgZg3E",
          "id": "0974",
          "name": "band close-grip pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yZHTRWukSGGSuu",
          "id": "0975",
          "name": "band close-grip push-up",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uL8HqVyRDVHwld",
          "id": "0976",
          "name": "band concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LInLQ67n9AZcUA",
          "id": "3117",
          "name": "band fixed back close grip pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ag1aYt025TQU4v",
          "id": "3116",
          "name": "band fixed back underhand pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pFjuic2EJX7NH2",
          "id": "0977",
          "name": "band front lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/adXNx3gUPoZLiP",
          "id": "0978",
          "name": "band front raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tO8ii9c8lsam8D",
          "id": "1408",
          "name": "band hip lift",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PXhc2jlXlt2MQS",
          "id": "0979",
          "name": "band horizontal pallof press",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ErkBF99a4yo8RX",
          "id": "0981",
          "name": "band jack knife sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vd-5ShDqYHsQ3A",
          "id": "0983",
          "name": "band kneeling one arm pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mWpuYRVlcRKgp3",
          "id": "0985",
          "name": "band kneeling twisting crunch",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qcDNp6k9YIP8Hx",
          "id": "0984",
          "name": "band lying hip internal rotation",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1CR-kP5yLoWdUF",
          "id": "1002",
          "name": "band lying straight leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nKrec3HzN35Myc",
          "id": "0986",
          "name": "band one arm overhead biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CSJqtP6J6CSlpy",
          "id": "0987",
          "name": "band one arm single leg split squat",
          "target": "quads"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Lmj1j4oFeAnKN8",
          "id": "0988",
          "name": "band one arm standing low row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GHHvamwYsZlMCX",
          "id": "0989",
          "name": "band one arm twisting chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/csuyc78mROwndZ",
          "id": "0990",
          "name": "band one arm twisting seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8BYvo883WOhVLD",
          "id": "0991",
          "name": "band pull through",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-MVYYKN7ZB8ygh",
          "id": "0992",
          "name": "band push sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GeLEyweoei2Poj",
          "id": "0993",
          "name": "band reverse fly",
          "target": "delts"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SrsVTsLYpXE6s4",
          "id": "0994",
          "name": "band reverse wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wphgOtw7DAD3O2",
          "id": "0996",
          "name": "band seated hip internal rotation",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ntFaSlocPHFBsN",
          "id": "1011",
          "name": "band seated twist",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AJm2vo25GjuWeh",
          "id": "0997",
          "name": "band shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2bJZm3QeJWRuya",
          "id": "1018",
          "name": "band shrug",
          "target": "traps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DmqjqxeZNzBozu",
          "id": "0998",
          "name": "band side triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bs7v6LADCuW1GA",
          "id": "0999",
          "name": "band single leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4qZqnxrUNN8Qop",
          "id": "1000",
          "name": "band single leg reverse calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tHDE7ViJ2RBJI0",
          "id": "1001",
          "name": "band single leg split squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MKry2gSrTJb1N7",
          "id": "1004",
          "name": "band squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MekJpNAqYvVRpy",
          "id": "1003",
          "name": "band squat row",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6ClU9oEBAGiJZD",
          "id": "1005",
          "name": "band standing crunch",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/F-eiyStqSDnuNL",
          "id": "1022",
          "name": "band standing rear delt row",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kQU8IIxFOV7If8",
          "id": "1007",
          "name": "band standing twisting crunch",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4jxmyT5Ggj0dbA",
          "id": "1008",
          "name": "band step-up",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mND6BkUB4oJxw2",
          "id": "1009",
          "name": "band stiff leg deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BUWQVL7KMj2zoZ",
          "id": "1023",
          "name": "band straight back stiff leg deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eX5G-4E3QWkqpj",
          "id": "1010",
          "name": "band straight leg deadlift",
          "target": "spine"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oJ8pGfh7JQdtd2",
          "id": "1012",
          "name": "band twisting overhead press",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x1AfU08QKnQHle",
          "id": "1369",
          "name": "band two legs calf raise - (band under both legs) v. 2",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YKgySGKxgmy031",
          "id": "1013",
          "name": "band underhand pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FGluQQDfdxNYGJ",
          "id": "1014",
          "name": "band v-up",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cs3wERhNRZbcsg",
          "id": "1015",
          "name": "band vertical pallof press",
          "target": "abs"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/I0nucxkbN5GPar",
          "id": "1016",
          "name": "band wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9ZB2MW5wRTGJBS",
          "id": "1017",
          "name": "band y-raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0CIf3V-N4eP-Ve",
          "id": "0023",
          "name": "barbell alternate biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ubNvUmsJB1c4NK",
          "id": "0024",
          "name": "barbell bench front squat",
          "target": "quads"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7kJypKODTZLoKJ",
          "id": "0025",
          "name": "barbell bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wA8FuhRRPNjMC1",
          "id": "0026",
          "name": "barbell bench squat",
          "target": "quads"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pgJ6PK6o2xklG5",
          "id": "1316",
          "name": "barbell bent arm pullover",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aTqtXhPmncZRKN",
          "id": "0027",
          "name": "barbell bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Pmbe1MyI1RoGzm",
          "id": "2407",
          "name": "barbell biceps curl (with arm blaster)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/06nLVlXHFg9Yqa",
          "id": "0028",
          "name": "barbell clean and press",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Lg5nOUYIeZtIx5",
          "id": "0029",
          "name": "barbell clean-grip front squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vHRQnQkasr-aor",
          "id": "0030",
          "name": "barbell close-grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jWwiUvbIMlouyU",
          "id": "0031",
          "name": "barbell curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MTMHZRXm7lB7bY",
          "id": "0032",
          "name": "barbell deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/W4C0aI9cuP0Dgt",
          "id": "0033",
          "name": "barbell decline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RItpIQNeGOiDo7",
          "id": "0034",
          "name": "barbell decline bent arm pullover",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M-09aI244jHEUV",
          "id": "0035",
          "name": "barbell decline close grip to skull press",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ScOqOVCPHrrBmh",
          "id": "1255",
          "name": "barbell decline pullover",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ej3Zf0oi7T3Jp5",
          "id": "0036",
          "name": "barbell decline wide-grip press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xeFJctKrb1ftlm",
          "id": "0037",
          "name": "barbell decline wide-grip pullover",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gZlxoAb6mtmc5K",
          "id": "0038",
          "name": "barbell drag curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fMIhkVOaxPK9FU",
          "id": "1370",
          "name": "barbell floor calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2YSqVg2uYMXyBT",
          "id": "0039",
          "name": "barbell front chest squat",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NOA82bn2hfw0kj",
          "id": "0041",
          "name": "barbell front raise",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TXjQstK5uNfPM9",
          "id": "0040",
          "name": "barbell front raise and pullover",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TEIeZLW6HeEYjg",
          "id": "0042",
          "name": "barbell front squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/inZkuSe-uvssnJ",
          "id": "0043",
          "name": "barbell full squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pVtuJ-SHCvZtp8",
          "id": "1461",
          "name": "barbell full squat (back pov)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IoQYmzDnY-tcWy",
          "id": "1462",
          "name": "barbell full squat (side pov)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fqImJ1W8K72G4E",
          "id": "1545",
          "name": "barbell full zercher squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TzWkVuKS9AhzH0",
          "id": "1409",
          "name": "barbell glute bridge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ScBbLEyU4XNIvo",
          "id": "3562",
          "name": "barbell glute bridge two legs on bench (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Uvs0OyWa6ZZVjr",
          "id": "0044",
          "name": "barbell good morning",
          "target": "hamstrings"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/exScSeD8XbIhgA",
          "id": "0045",
          "name": "barbell guillotine bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dndbLBszmSe07U",
          "id": "0046",
          "name": "barbell hack squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bCm1nFpDARnE04",
          "id": "1436",
          "name": "barbell high bar squat",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/D4BdwhILrFtxk-",
          "id": "0047",
          "name": "barbell incline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/is7CdJffRZQkwC",
          "id": "1719",
          "name": "barbell incline close grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2WNkQ1Lx3XUnId",
          "id": "0048",
          "name": "barbell incline reverse-grip press",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Q4xsLNEm7-O3z7",
          "id": "0049",
          "name": "barbell incline row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/179tayMPLZIhsh",
          "id": "0050",
          "name": "barbell incline shoulder raise",
          "target": "serratus anterior"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IHzam-O2B1q3nf",
          "id": "0051",
          "name": "barbell jefferson squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xYVy8YZHKsoqpH",
          "id": "0052",
          "name": "barbell jm bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vOfPaNJb8hs-nB",
          "id": "0053",
          "name": "barbell jump squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uia7fZ1IrMYsNw",
          "id": "1410",
          "name": "barbell lateral lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/27zRMsHFWojSvT",
          "id": "1435",
          "name": "barbell low bar squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wlklMC7epcOgFB",
          "id": "0054",
          "name": "barbell lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/O9DNZOUXHc2GXG",
          "id": "1720",
          "name": "barbell lying back of the head tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Lrt0qIDZm9uvWm",
          "id": "0055",
          "name": "barbell lying close-grip press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4KkysvD8blEjnL",
          "id": "0056",
          "name": "barbell lying close-grip triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sPUas0LzsCiZrl",
          "id": "0057",
          "name": "barbell lying extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WXxOp2TlM35CWz",
          "id": "0058",
          "name": "barbell lying lifting (on hip)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qt0x9Nbr32BYc1",
          "id": "0059",
          "name": "barbell lying preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/knRJU881VfhuD7",
          "id": "0061",
          "name": "barbell lying triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/efYbylXJviKYV3",
          "id": "0060",
          "name": "barbell lying triceps extension skull crusher",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/halbZyf7v-yMlh",
          "id": "0063",
          "name": "barbell narrow stance squat",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0Tnq3-jFCp53m7",
          "id": "0064",
          "name": "barbell one arm bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QHHIhFGtlyovdr",
          "id": "0065",
          "name": "barbell one arm floor press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5xAit6HYqJ5OEX",
          "id": "0066",
          "name": "barbell one arm side deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/f-fDS0gfb8wmuQ",
          "id": "0067",
          "name": "barbell one arm snatch",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/E84myPwU9NHLxc",
          "id": "0068",
          "name": "barbell one leg squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MeBieGHG8PHDz8",
          "id": "0069",
          "name": "barbell overhead squat",
          "target": "quads"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5WTVerZgBihA8D",
          "id": "1411",
          "name": "barbell palms down wrist curl over a bench",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aaJUEs7F1QyQDm",
          "id": "1412",
          "name": "barbell palms up wrist curl over a bench",
          "target": "forearms"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/354DwRiYfNYxrG",
          "id": "3017",
          "name": "barbell pendlay row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/h7nP7WmqbgoQ2X",
          "id": "1751",
          "name": "barbell pin presses",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ytA4GMZUYJHtP4",
          "id": "0070",
          "name": "barbell preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kXGVHTmpgYU6XK",
          "id": "0071",
          "name": "barbell press sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vTwpj3uJulYg0x",
          "id": "0072",
          "name": "barbell prone incline curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/d9rgNBFCPetElf",
          "id": "0073",
          "name": "barbell pullover",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xd43cw5f-5xFAU",
          "id": "0022",
          "name": "barbell pullover to press",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZeBSuuCCqgltg5",
          "id": "0074",
          "name": "barbell rack pull",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/B9Cs8C8PhsmB6N",
          "id": "0075",
          "name": "barbell rear delt raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x0KbYOqyQFzWxQ",
          "id": "0076",
          "name": "barbell rear delt row",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hRGISYOvFf4sCo",
          "id": "0078",
          "name": "barbell rear lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6Trd0ocCsQAJow",
          "id": "0077",
          "name": "barbell rear lunge v. 2",
          "target": "glutes"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ABjVXHFGIQ3HmZ",
          "id": "0079",
          "name": "barbell revers wrist curl v. 2",
          "target": "forearms"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/y5ErIuUNWIASFe",
          "id": "2187",
          "name": "barbell reverse close-grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TSuz3DMb1pjuvn",
          "id": "0080",
          "name": "barbell reverse curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kckdrV7PPSwgzT",
          "id": "0118",
          "name": "barbell reverse grip bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LPbZsen9n-mJfP",
          "id": "1256",
          "name": "barbell reverse grip decline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xoRBKPphinOSwp",
          "id": "1257",
          "name": "barbell reverse grip incline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tgNkv86yD5euQ3",
          "id": "1317",
          "name": "barbell reverse grip incline bench row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hf-2qryGCdnxxa",
          "id": "1721",
          "name": "barbell reverse grip skullcrusher",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EjzRPyFS6Sms6l",
          "id": "0081",
          "name": "barbell reverse preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HTsYnWGO0ZpEVe",
          "id": "0082",
          "name": "barbell reverse wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x0vs2UfaMQrY7B",
          "id": "0084",
          "name": "barbell rollerout",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/C1YSy5n8B8WWGi",
          "id": "0083",
          "name": "barbell rollerout from bench",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3820VXUgfudm0E",
          "id": "0085",
          "name": "barbell romanian deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/s0EzsyR9aL30V2",
          "id": "0086",
          "name": "barbell seated behind head military press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/laal6YSZc3Fo5P",
          "id": "0087",
          "name": "barbell seated bradford rocky press",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fh-0n7TZLzZ7M2",
          "id": "0088",
          "name": "barbell seated calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Cozx0Wv-WNso6y",
          "id": "1371",
          "name": "barbell seated calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3zo0AEWeq3Nbeq",
          "id": "1718",
          "name": "barbell seated close grip behind neck triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7QoJwuH9c415Z8",
          "id": "0089",
          "name": "barbell seated close-grip concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TMO1s21OyaRt-V",
          "id": "0090",
          "name": "barbell seated good morning",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/O5Ry7SjKRmVwvj",
          "id": "0091",
          "name": "barbell seated overhead press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zYS4QlnN-AMUpo",
          "id": "0092",
          "name": "barbell seated overhead triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/F5UTrT19uLRnKe",
          "id": "0094",
          "name": "barbell seated twist",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LXGz0ZIkrbdE80",
          "id": "0095",
          "name": "barbell shrug",
          "target": "traps"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8ziE8LxtY5Sw32",
          "id": "0096",
          "name": "barbell side bent v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vMNrGAIjqrLclB",
          "id": "0098",
          "name": "barbell side split squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ziTZb5wlTbJySI",
          "id": "0097",
          "name": "barbell side split squat v. 2",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dmyahxPyiE0F1m",
          "id": "1756",
          "name": "barbell single leg deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fPfvQLO3u9Qzps",
          "id": "0099",
          "name": "barbell single leg split squat",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/H0A45oZqsvlSx8",
          "id": "2799",
          "name": "barbell sitted alternate leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bYUeNCvd6DIsVi",
          "id": "2800",
          "name": "barbell sitted alternate leg raise (female)",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wc9dUuVghpe0Pg",
          "id": "0100",
          "name": "barbell skier",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/va3eYXygoFlHTa",
          "id": "0101",
          "name": "barbell speed squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/o1nzuEffhWmi2z",
          "id": "2810",
          "name": "barbell split squat v. 2",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kRBntMgh7KlT4Q",
          "id": "0102",
          "name": "barbell squat (on knees)",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PQPnYGOvqz1ZuV",
          "id": "2798",
          "name": "barbell squat jump step rear lunge",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/y0l2HHR0TI9LIk",
          "id": "0103",
          "name": "barbell standing ab rollerout",
          "target": "abs"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iTZV9trJ3nZHp4",
          "id": "0104",
          "name": "barbell standing back wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BiS8vejLL7GRSr",
          "id": "0105",
          "name": "barbell standing bradford press",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JgYFKQvuI3iHhI",
          "id": "1372",
          "name": "barbell standing calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CjFodZhpUUKX35",
          "id": "0106",
          "name": "barbell standing close grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NNXRU1V6qw78Aw",
          "id": "1456",
          "name": "barbell standing close grip military press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Hlt6rLEnlCcjNN",
          "id": "2414",
          "name": "barbell standing concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rUkQZyUJT1KCuK",
          "id": "0107",
          "name": "barbell standing front raise over head",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/frFYLv7vriIuoJ",
          "id": "0108",
          "name": "barbell standing leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/W9fCPFMhJeNGab",
          "id": "0109",
          "name": "barbell standing overhead triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eVon66q3FEmBj4",
          "id": "0110",
          "name": "barbell standing reverse grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ayC2ChdrTpuSD8",
          "id": "0111",
          "name": "barbell standing rocking leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8LMcQoHmrVeVZC",
          "id": "0112",
          "name": "barbell standing twist",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/10zZL91m-lxQ0A",
          "id": "1629",
          "name": "barbell standing wide grip biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/90NKVRtg0xfKb3",
          "id": "1457",
          "name": "barbell standing wide military press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MAqUdg9eBL80ds",
          "id": "0113",
          "name": "barbell standing wide-grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vFj9mPC1HrP7cI",
          "id": "0114",
          "name": "barbell step-up",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2iUilKufEkEk5-",
          "id": "0115",
          "name": "barbell stiff leg good morning",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SNxdptKvMPrss3",
          "id": "0116",
          "name": "barbell straight leg deadlift",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZuHFRG3zmhVVIh",
          "id": "0117",
          "name": "barbell sumo deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Wt8sm-70xAe60w",
          "id": "3305",
          "name": "barbell thruster",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/afIQHeAE71lxbm",
          "id": "0120",
          "name": "barbell upright row",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1wuuY86Rur6BZF",
          "id": "0119",
          "name": "barbell upright row v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9hG3b07swyIHWs",
          "id": "0121",
          "name": "barbell upright row v. 3",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GIu28X6H6xusUl",
          "id": "0122",
          "name": "barbell wide bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lKFCuMZWHNuCql",
          "id": "1258",
          "name": "barbell wide reverse grip bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/k60n17dHP8mjCE",
          "id": "0124",
          "name": "barbell wide squat",
          "target": "quads"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/O16P5tcZ2dUbQC",
          "id": "0123",
          "name": "barbell wide-grip upright row",
          "target": "delts"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fylrITVTnVV30a",
          "id": "0126",
          "name": "barbell wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rvmGeodrZqV5xr",
          "id": "0125",
          "name": "barbell wrist curl v. 2",
          "target": "forearms"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YBRVXwuJfEE97K",
          "id": "0127",
          "name": "barbell zercher squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oMoONExKSgvRGE",
          "id": "3212",
          "name": "basic toe touch (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SKO3qYjGyaAfn5",
          "id": "0128",
          "name": "battling ropes",
          "target": "delts"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GY-K1X-nZoDNEV",
          "id": "3360",
          "name": "bear crawl",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "chest",
          "equipment": "assisted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mD1NRUg9sOhqhH",
          "id": "1259",
          "name": "behind head chest stretch",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZQWcT2mGUn7M1i",
          "id": "0129",
          "name": "bench dip (knees bent)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pSxMsDR8YqK547",
          "id": "1399",
          "name": "bench dip on floor",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZZzX6j6mVaO-WY",
          "id": "0130",
          "name": "bench hip extension",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w451t7dgJC3LwX",
          "id": "3019",
          "name": "bench pull-ups",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ISiK3u0ZXMsGIE",
          "id": "3639",
          "name": "bent knee lying twist (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AtrV9qK7229lxE",
          "id": "1770",
          "name": "biceps leg concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iv3ZDWKOGw2tuS",
          "id": "0139",
          "name": "biceps narrow pull-ups",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/834MBKXjSh15Le",
          "id": "0140",
          "name": "biceps pull-up",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LBm25Qs9xc9GL4",
          "id": "0137",
          "name": "body-up",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/L6F8HHaBIFzc-U",
          "id": "3543",
          "name": "bodyweight drop jump squat",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/d4nYSzmpi-cNr1",
          "id": "3544",
          "name": "bodyweight incline side plank",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mV5Xn6tS12ZSR7",
          "id": "1771",
          "name": "bodyweight kneeling triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aX4Eud-FOuC6E0",
          "id": "1769",
          "name": "bodyweight side lying biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8b49crAdWKi8u5",
          "id": "3168",
          "name": "bodyweight squatting row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rkPdHMfCdhptcI",
          "id": "3167",
          "name": "bodyweight squatting row (with towel)",
          "target": "upper back"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WiDBZ3NTts99IU",
          "id": "1373",
          "name": "bodyweight standing calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nvZeHsdWxvMzn3",
          "id": "3156",
          "name": "bodyweight standing close-grip one arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RbZzpwE88ttwjc",
          "id": "3158",
          "name": "bodyweight standing close-grip row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Y4fsG93aFp0cak",
          "id": "3162",
          "name": "bodyweight standing one arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BIpmrwYxo1b-N9",
          "id": "3161",
          "name": "bodyweight standing one arm row (with towel)",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4swoXjlXbBd2kV",
          "id": "3166",
          "name": "bodyweight standing row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xYL2iRM6bJrpcQ",
          "id": "3165",
          "name": "bodyweight standing row (with towel)",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eeqLEm-PGFRg08",
          "id": "0138",
          "name": "bottoms-up",
          "target": "abs"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UmS2br08erJ6m2",
          "id": "1374",
          "name": "box jump down with one leg stabilization",
          "target": "calves"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zTVGR1jST1epm9",
          "id": "2466",
          "name": "bridge - mountain climber (cross body)",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZApk-Ja2rAYpTE",
          "id": "1160",
          "name": "burpee",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/17e9aE2QuzyJII",
          "id": "0870",
          "name": "butt-ups",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CJCK76lESbJvDW",
          "id": "1494",
          "name": "butterfly yoga pose",
          "target": "adductors"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oD2fBxIurUu81t",
          "id": "0148",
          "name": "cable alternate shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EjptzecV--Z56p",
          "id": "0149",
          "name": "cable alternate triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0Kg8jTjgEZKFsf",
          "id": "3235",
          "name": "cable assisted inverse leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fV61NfK7XAyKCk",
          "id": "0150",
          "name": "cable bar lateral pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zOMvZex00bc20i",
          "id": "0151",
          "name": "cable bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w94uM9aBLw-cod",
          "id": "1630",
          "name": "cable close grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WogsQ2e2mlBI0m",
          "id": "1631",
          "name": "cable concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/D77fvRUIKrRTaO",
          "id": "0152",
          "name": "cable concentration extension (on knee)",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/K8xySBrhuFCuo3",
          "id": "0153",
          "name": "cable cross-over lateral pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sPAg-vKreIGTOL",
          "id": "0154",
          "name": "cable cross-over revers fly",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/o7Qcma89tXnOxM",
          "id": "0155",
          "name": "cable cross-over variation",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/B56eIMft3G9Non",
          "id": "0868",
          "name": "cable curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eQepvLEdiqqQBO",
          "id": "0157",
          "name": "cable deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EaPC1EySHDMTw9",
          "id": "0158",
          "name": "cable decline fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oQE41G5KeLNqpc",
          "id": "1260",
          "name": "cable decline one arm press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Y6OJt6y8ZxbCcb",
          "id": "1261",
          "name": "cable decline press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3qqw2I2yVqCsjK",
          "id": "0159",
          "name": "cable decline seated wide-grip row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5dU4JvZCapc7UP",
          "id": "1632",
          "name": "cable drag curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sLbf6XJBzARDaq",
          "id": "0160",
          "name": "cable floor seated wide-grip row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kM7BrP3v4bVNlh",
          "id": "0161",
          "name": "cable forward raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qARwXSe2ymdTk6",
          "id": "0162",
          "name": "cable front raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5kwl4sldH2JUPe",
          "id": "0164",
          "name": "cable front shoulder raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Qhso-DkI99eBQ3",
          "id": "0165",
          "name": "cable hammer curl (with rope)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/neVVj2rjQhokWh",
          "id": "1722",
          "name": "cable high pulley overhead tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zw78OLJX4ExE4X",
          "id": "0167",
          "name": "cable high row (kneeling)",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dV9u6CVJNQwMyc",
          "id": "0168",
          "name": "cable hip adduction",
          "target": "adductors"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BmI0tGeCynFKnU",
          "id": "0169",
          "name": "cable incline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZgSlnUVh57tMk5",
          "id": "1318",
          "name": "cable incline bench row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FUuQM7qUlvBmkq",
          "id": "0171",
          "name": "cable incline fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ALBU0FiBLdxpBf",
          "id": "0170",
          "name": "cable incline fly (on stability ball)",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5lCzdkGATtF-LP",
          "id": "0172",
          "name": "cable incline pushdown",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YLjFDdr-ZXKYPh",
          "id": "0173",
          "name": "cable incline triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/senpCt3ILyjV0D",
          "id": "0174",
          "name": "cable judo flip",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IEanErjbzudjqQ",
          "id": "0860",
          "name": "cable kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kqCoLgdvJye3n3",
          "id": "0175",
          "name": "cable kneeling crunch",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qCU7wsLNhnXDuq",
          "id": "3697",
          "name": "cable kneeling rear delt row (with rope) (male)",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/z9WSPpmSRjS8gZ",
          "id": "0176",
          "name": "cable kneeling triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/O67YANULTLAnhG",
          "id": "2330",
          "name": "cable lat pulldown full range of motion",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CwzB6AT3FR0Xu5",
          "id": "0177",
          "name": "cable lateral pulldown (with rope attachment)",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bUhwNXeXzTADm7",
          "id": "2616",
          "name": "cable lateral pulldown with v-bar",
          "target": "lats"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/X4oHtX3QvQ3VMk",
          "id": "0178",
          "name": "cable lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aQ5slh1rbjEs5T",
          "id": "0179",
          "name": "cable low fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/T-JEIMiojanVXR",
          "id": "0180",
          "name": "cable low seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pPzRMt1vLRHpz0",
          "id": "1634",
          "name": "cable lying bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XwCzpICScTA7K3",
          "id": "0182",
          "name": "cable lying close-grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qXwPaj1l24TDLg",
          "id": "0184",
          "name": "cable lying extension pullover (with rope attachment)",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-81R0S8aQnwUyv",
          "id": "0185",
          "name": "cable lying fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/87T6b1cg3jRLlZ",
          "id": "0186",
          "name": "cable lying triceps extension v. 2",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LIXNRhvRJoWay5",
          "id": "0188",
          "name": "cable middle fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eA8qoeaZdVTnCy",
          "id": "0189",
          "name": "cable one arm bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EFUxAW14I3iEBQ",
          "id": "0190",
          "name": "cable one arm curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/glQZpPA-yg08hh",
          "id": "1262",
          "name": "cable one arm decline chest fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zCRgFHQkoDwAiM",
          "id": "1263",
          "name": "cable one arm fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rYs5W5DgoJWZxd",
          "id": "1264",
          "name": "cable one arm incline fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BC3u6alpBfNEsj",
          "id": "1265",
          "name": "cable one arm incline press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tydKX5EzAvjII0",
          "id": "1266",
          "name": "cable one arm incline press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pr6iBL6mpW1ui8",
          "id": "0191",
          "name": "cable one arm lateral bent-over",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/y9-tOPHcrvTbi9",
          "id": "0192",
          "name": "cable one arm lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0ff-FOs-JOIQbj",
          "id": "1633",
          "name": "cable one arm preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/X08JcPcwAIjuOi",
          "id": "1267",
          "name": "cable one arm press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0oEVjfl7J3VkVj",
          "id": "3563",
          "name": "cable one arm pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cJ77H7fLll3GRi",
          "id": "1635",
          "name": "cable one arm reverse preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DxfA3aZ7NeLdsl",
          "id": "0193",
          "name": "cable one arm straight back high row (kneeling)",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iBQ4jc8lGitJgw",
          "id": "1723",
          "name": "cable one arm tricep pushdown",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mdJG4Z0sDmybcL",
          "id": "1636",
          "name": "cable overhead curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iJa8G2bbjX6vKA",
          "id": "1637",
          "name": "cable overhead curl on exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EzEFJDGERADIku",
          "id": "0194",
          "name": "cable overhead triceps extension (rope attachment)",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2R9o6Rd0SaELK-",
          "id": "1319",
          "name": "cable palm rotational row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UDmChcaXsUNzeE",
          "id": "0195",
          "name": "cable preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EBn-6fEEjOufeg",
          "id": "1268",
          "name": "cable press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/B2ZgoQ1KC8Rry3",
          "id": "0196",
          "name": "cable pull through (with rope)",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LTiLTZVbBk2WT7",
          "id": "0198",
          "name": "cable pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9MLEUdoWbyxwex",
          "id": "0197",
          "name": "cable pulldown (pro lat bar)",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FmN4LnBXXtvwrc",
          "id": "1638",
          "name": "cable pulldown bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/N9LioiUSSUaLQu",
          "id": "0201",
          "name": "cable pushdown",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gAn2nupMfc4Hvt",
          "id": "0199",
          "name": "cable pushdown (straight arm) v. 2",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZPNzGTy0V37QhI",
          "id": "0200",
          "name": "cable pushdown (with rope attachment)",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gzL6F9ETvnIplk",
          "id": "0202",
          "name": "cable rear delt row (stirrups)",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5StyeNUZCGZpPj",
          "id": "0203",
          "name": "cable rear delt row (with rope)",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/h23MqeAkRLC1jw",
          "id": "0204",
          "name": "cable rear drive",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uhnzrwPueB04dx",
          "id": "0205",
          "name": "cable rear pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/du3em2WI4-rx-Z",
          "id": "0873",
          "name": "cable reverse crunch",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MfeY5215lp91bp",
          "id": "0206",
          "name": "cable reverse curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-qfvuLppQtMPWP",
          "id": "2406",
          "name": "cable reverse grip triceps pushdown (sz-bar) (with arm blaster)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1jXuzloo-x4M9C",
          "id": "1413",
          "name": "cable reverse one arm curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tlsWpHRRUxQLEu",
          "id": "0209",
          "name": "cable reverse preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-tTS8cYTE9n4ON",
          "id": "0210",
          "name": "cable reverse wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jEMUyhHamNW9yQ",
          "id": "0207",
          "name": "cable reverse-grip pushdown",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uI809RkvZBPyqy",
          "id": "0208",
          "name": "cable reverse-grip straight back seated high row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-uGhb7VG8mbsT3",
          "id": "1320",
          "name": "cable rope crossover seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZJPGdwkObULzcC",
          "id": "1321",
          "name": "cable rope elevated seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zVUzRk9RZakaGi",
          "id": "1322",
          "name": "cable rope extension incline bench row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nyyst8zSlLFNvY",
          "id": "1639",
          "name": "cable rope hammer preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hobaTlqFmQLu8u",
          "id": "1724",
          "name": "cable rope high pulley overhead tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/u5UvkbMUqjHaV1",
          "id": "1725",
          "name": "cable rope incline tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BX9gSWQkJomPpU",
          "id": "1726",
          "name": "cable rope lying on floor tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ftr4maEmKemnX3",
          "id": "1640",
          "name": "cable rope one arm hammer preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pZoyLte2G3aJdQ",
          "id": "1323",
          "name": "cable rope seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HfQ4u4ccNeS7gM",
          "id": "0211",
          "name": "cable russian twists (on stability ball)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IpdlFwcEoUzySK",
          "id": "2144",
          "name": "cable seated chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ebh8fLXonS8TTz",
          "id": "0212",
          "name": "cable seated crunch",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QxJ7fIMjAaQS3r",
          "id": "1641",
          "name": "cable seated curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AD8e64li9wysw7",
          "id": "0213",
          "name": "cable seated high row (v-bar)",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/owXoXmrtfL8yqY",
          "id": "0214",
          "name": "cable seated one arm alternate row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/a1MKwUeMis1PDK",
          "id": "1642",
          "name": "cable seated one arm concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/e095xwvUQFtYyC",
          "id": "1643",
          "name": "cable seated overhead curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xR8eu8YS38hjfw",
          "id": "0215",
          "name": "cable seated rear lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gJblEHalgvMMiu",
          "id": "0861",
          "name": "cable seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-6aLSYiuZlc1Bq",
          "id": "0216",
          "name": "cable seated shoulder internal rotation",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RwqVTTtgQvYcVD",
          "id": "2399",
          "name": "cable seated twist",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/06BLxIJEh8vD1k",
          "id": "0218",
          "name": "cable seated wide-grip row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/s4GWCgNzkO4yD6",
          "id": "0219",
          "name": "cable shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ihkd9aPWecwqkM",
          "id": "0220",
          "name": "cable shrug",
          "target": "traps"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qvH6tvQ07W9iQW",
          "id": "0222",
          "name": "cable side bend",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wNXhTj3ewSJRbe",
          "id": "0221",
          "name": "cable side bend crunch (bosu ball)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dftBfL5vO4TpLS",
          "id": "0223",
          "name": "cable side crunch",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FuqzAwYYQpsSk5",
          "id": "1717",
          "name": "cable squat row (with rope attachment)",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jwH4GwQT6W1fN8",
          "id": "1644",
          "name": "cable squatting curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QfGJ9HBbHEA-Cu",
          "id": "0224",
          "name": "cable standing back wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6l9uR2SW6Amo4l",
          "id": "1375",
          "name": "cable standing calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WboxF4cVhvkOPA",
          "id": "0225",
          "name": "cable standing cross-over high reverse fly",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zntBNUUsaeZ4Qn",
          "id": "0226",
          "name": "cable standing crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/laM9MT3xS28874",
          "id": "0874",
          "name": "cable standing crunch (with rope attachment)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NyUBGvjASZhcYj",
          "id": "0227",
          "name": "cable standing fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DQDj3ZSIn1ftJ1",
          "id": "0228",
          "name": "cable standing hip extension",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4ODMka2sscWzp5",
          "id": "0229",
          "name": "cable standing inner curl",
          "target": "biceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KWNwztXJMINPxx",
          "id": "0230",
          "name": "cable standing lift",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fNoeTmgRVXozcp",
          "id": "0231",
          "name": "cable standing one arm triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4-mGW1Y1oMtuSF",
          "id": "1376",
          "name": "cable standing one leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tslPCVnvwT9IYA",
          "id": "0232",
          "name": "cable standing pulldown (with rope)",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yAby0xEB-APZfj",
          "id": "0233",
          "name": "cable standing rear delt row (with rope)",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3sc8Zozi6gdSu6",
          "id": "1727",
          "name": "cable standing reverse grip one arm overhead tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RqXMTrNV7g85Q9",
          "id": "0234",
          "name": "cable standing row (v-bar)",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BOimjz5thkDt6M",
          "id": "0235",
          "name": "cable standing shoulder external rotation",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cJ35HScGx2fg9p",
          "id": "0236",
          "name": "cable standing twist row (v-bar)",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nkcQ9Ks33vUGsS",
          "id": "1269",
          "name": "cable standing up straight crossovers",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NUKOmlcfdTZoqA",
          "id": "0238",
          "name": "cable straight arm pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vNuXt8P-iBHpIs",
          "id": "0237",
          "name": "cable straight arm pulldown (with rope)",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Lh71K92LTX8yjS",
          "id": "0239",
          "name": "cable straight back seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eH143B0tRnHdaX",
          "id": "0240",
          "name": "cable supine reverse fly",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eYqIqTxoKqiO8t",
          "id": "2464",
          "name": "cable thibaudeau kayak row",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nnrdTD-XDNGVIB",
          "id": "0241",
          "name": "cable triceps pushdown (v-bar)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/S90i0-aFe8dNEG",
          "id": "2405",
          "name": "cable triceps pushdown (v-bar) (with arm blaster)",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/W3jipPc8jAZNBE",
          "id": "0242",
          "name": "cable tuck reverse crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aszn9lGEZ6Hdhj",
          "id": "0243",
          "name": "cable twist",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qS-Zecpf4RX24K",
          "id": "0862",
          "name": "cable twist (up-down)",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QgE4kVk9uk1w2D",
          "id": "0244",
          "name": "cable twisting pull",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ndAgfl42XWRvrw",
          "id": "1645",
          "name": "cable two arm curl on incline bench",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rXSCQO0T187f5p",
          "id": "1728",
          "name": "cable two arm tricep kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bN1ElGmiUkAlgb",
          "id": "0245",
          "name": "cable underhand pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sF9RvWV1o8tydf",
          "id": "1270",
          "name": "cable upper chest crossovers",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ljnkcd7eYizSX5",
          "id": "1324",
          "name": "cable upper row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4qzP0qOzfv1lSW",
          "id": "0246",
          "name": "cable upright row",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dUFuA8vQlg-Ize",
          "id": "1325",
          "name": "cable wide grip rear pulldown behind neck",
          "target": "lats"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PsDlqsMwBqbjIA",
          "id": "0247",
          "name": "cable wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SkLQnrMWLBI0Ra",
          "id": "1407",
          "name": "calf push stretch with hands against wall",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5RNY57HQAiC0EZ",
          "id": "1377",
          "name": "calf stretch with hands against wall",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UducihfWNt3VJg",
          "id": "1378",
          "name": "calf stretch with rope",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1OubFESlejQrN5",
          "id": "0248",
          "name": "cambered bar lying row",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3BcYCWhVuBARNC",
          "id": "2963",
          "name": "captains chair straight leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/W7wzN0y41yvlEb",
          "id": "1548",
          "name": "chair leg extended stretch",
          "target": "quads"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Yrx9szkgU4SdAZ",
          "id": "1271",
          "name": "chest and front of shoulder stretch",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jrtOmm-9NHR30C",
          "id": "0251",
          "name": "chest dip",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/g7NaKK8mFHlvNK",
          "id": "1430",
          "name": "chest dip (on dip-pull-up cage)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tSokEy2AB9gBwI",
          "id": "2462",
          "name": "chest dip on straight bar",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nRLoeJ2IaZ6eYp",
          "id": "1272",
          "name": "chest stretch with exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2ByuDltNwsFYrT",
          "id": "3216",
          "name": "chest tap push-up (male)",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LN2fQ2c0BQYmeM",
          "id": "1326",
          "name": "chin-up",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/At0dBSC6VAJLcy",
          "id": "0253",
          "name": "chin-ups (narrow parallel grip)",
          "target": "upper back"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vtikNckANINcEZ",
          "id": "0257",
          "name": "circles knee stretch",
          "target": "calves"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kH8rqjuD4pSdMC",
          "id": "1273",
          "name": "clap push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ey8kRi2jhns6Nf",
          "id": "0258",
          "name": "clock push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eSSWYIncwuGIC8",
          "id": "1327",
          "name": "close grip chin-up",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/506g9qXAKUtjOp",
          "id": "0259",
          "name": "close-grip push-up",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/im-L9EiewK0hkH",
          "id": "2398",
          "name": "close-grip push-up (on knees)",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ff4Wzwa6-Y4ox8",
          "id": "0260",
          "name": "cocoons",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KZcAKvpL43E5O1",
          "id": "1468",
          "name": "crab twist toe touch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8s0miorMxLAO6q",
          "id": "0262",
          "name": "cross body crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/huELa3sYBIB4Fq",
          "id": "0267",
          "name": "crunch (hands overhead)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/q9qn59FD4RWGFg",
          "id": "0271",
          "name": "crunch (on stability ball)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KYPy1A81Mf9iCw",
          "id": "0272",
          "name": "crunch (on stability ball, arms straight)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XhGtDrZFmvu1am",
          "id": "0274",
          "name": "crunch floor",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/q74vr8oIYIDJF6",
          "id": "3016",
          "name": "curl-up",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SysbMS9SW8rU6T",
          "id": "3769",
          "name": "curtsey squat",
          "target": "glutes"
        },
        {
          "bodyPart": "cardio",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Yv2KdxmtVRAsXB",
          "id": "2331",
          "name": "cycle cross trainer",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JI18l9FLfeHsgL",
          "id": "0276",
          "name": "dead bug",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PCXbMxsgwqmkuz",
          "id": "0277",
          "name": "decline crunch",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ro-jTV74SzSiIz",
          "id": "0279",
          "name": "decline push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AaC1pUkgpM-3h2",
          "id": "0282",
          "name": "decline sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9NKuj2rHE2V3fS",
          "id": "1274",
          "name": "deep push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/edK3FHNgt-b9FS",
          "id": "0283",
          "name": "diamond push-up",
          "target": "triceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/u2ev-PzwS6Wqwt",
          "id": "0284",
          "name": "donkey calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CH7egljA8-2KG3",
          "id": "1275",
          "name": "drop push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CApbiTKEnj1Epj",
          "id": "0285",
          "name": "dumbbell alternate biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8Ry0I6KeJ2GEjb",
          "id": "2403",
          "name": "dumbbell alternate biceps curl (with arm blaster)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fPNEFbtwnpL1ke",
          "id": "1646",
          "name": "dumbbell alternate hammer preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/i-cseYclsv-wf8",
          "id": "1647",
          "name": "dumbbell alternate preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hDBiT-EXornQV5",
          "id": "1648",
          "name": "dumbbell alternate seated hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Tk34-rdPhY8aBf",
          "id": "0286",
          "name": "dumbbell alternate side press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hEJUM5HbiG2gxX",
          "id": "1649",
          "name": "dumbbell alternating bicep curl with leg raised on exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/itTHJ7KMN16AQk",
          "id": "1650",
          "name": "dumbbell alternating seated bicep curl on exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NYYSk8o9dyQi8i",
          "id": "2137",
          "name": "dumbbell arnold press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bYkybgTTxnZbSU",
          "id": "0287",
          "name": "dumbbell arnold press v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HVYWt1N-vzVV0o",
          "id": "0288",
          "name": "dumbbell around pullover",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lGgT30q5irH0Bv",
          "id": "0289",
          "name": "dumbbell bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HH1NWp7zW37S0f",
          "id": "0290",
          "name": "dumbbell bench seated press",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/S3O25w0I1SM-Ni",
          "id": "0291",
          "name": "dumbbell bench squat",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IDlxlBVd1XalEK",
          "id": "0293",
          "name": "dumbbell bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3cITyjRVsdSRvL",
          "id": "1651",
          "name": "dumbbell bicep curl lunge with bowling motion",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2Edpv9tI9ib2pV",
          "id": "1652",
          "name": "dumbbell bicep curl on exercise ball with leg raised",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ahzwjE4RtFijky",
          "id": "1653",
          "name": "dumbbell bicep curl with stork stance",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wHN0FfVpCJDw4W",
          "id": "0294",
          "name": "dumbbell biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/e7XOdVzl5zRpTI",
          "id": "2401",
          "name": "dumbbell biceps curl (with arm blaster)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7oIXt5ZnXQie1Y",
          "id": "1654",
          "name": "dumbbell biceps curl reverse",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/505qph3vslCsP6",
          "id": "1655",
          "name": "dumbbell biceps curl squat",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xLZuLFwd9IidcW",
          "id": "1656",
          "name": "dumbbell biceps curl v sit on bosu ball",
          "target": "biceps"
        },
        {
          "bodyPart": "cardio",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GGqp4LVfOkzslN",
          "id": "1201",
          "name": "dumbbell burpee",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fkLXeHRC0wEyrF",
          "id": "0295",
          "name": "dumbbell clean",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lpqUox3mXuIZRC",
          "id": "1731",
          "name": "dumbbell close grip press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IhFD4ku-jiKrwn",
          "id": "0296",
          "name": "dumbbell close-grip press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5JWzy3rwO6fsbV",
          "id": "0297",
          "name": "dumbbell concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hj-MsH35VSI5Lx",
          "id": "3635",
          "name": "dumbbell contralateral forward lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/X8nMQ97TVwsGBQ",
          "id": "0298",
          "name": "dumbbell cross body hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4NQbzToArWWmHp",
          "id": "1657",
          "name": "dumbbell cross body hammer curl v. 2",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PtPsrZgAtqtC1J",
          "id": "0299",
          "name": "dumbbell cuban press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/361Q7pF4cWHxnA",
          "id": "2136",
          "name": "dumbbell cuban press v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WfXX3cidMvAkAb",
          "id": "0300",
          "name": "dumbbell deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wEXiRmCBRLQNvu",
          "id": "0301",
          "name": "dumbbell decline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hJVE6Of3gaDxdu",
          "id": "0302",
          "name": "dumbbell decline fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1cJz1JuhXay8lr",
          "id": "0303",
          "name": "dumbbell decline hammer press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/g8RwddH9rmNTmL",
          "id": "1276",
          "name": "dumbbell decline one arm fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3Nxi79vLNjoM9y",
          "id": "1617",
          "name": "dumbbell decline one arm hammer press",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Gk3daaw0BHUmB6",
          "id": "0305",
          "name": "dumbbell decline shrug",
          "target": "traps"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3fWa0WavVS9dZh",
          "id": "0304",
          "name": "dumbbell decline shrug v. 2",
          "target": "traps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TDvNTfD1eoVGUJ",
          "id": "0306",
          "name": "dumbbell decline triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6Tr9Sj8OKbp3qd",
          "id": "0307",
          "name": "dumbbell decline twist fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ikZEXhO63YVX6r",
          "id": "1437",
          "name": "dumbbell finger curls",
          "target": "forearms"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/d34sCUq7xvL8yN",
          "id": "0308",
          "name": "dumbbell fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Tj-nrjhGeSx6iQ",
          "id": "1277",
          "name": "dumbbell fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/c4vwsdnpdgZkdE",
          "id": "1732",
          "name": "dumbbell forward lunge triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/suOBuIvn6FKHFR",
          "id": "0310",
          "name": "dumbbell front raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Hzdakq9zWPd4UA",
          "id": "0309",
          "name": "dumbbell front raise v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Kn6Bs6kNOsy0dS",
          "id": "0311",
          "name": "dumbbell full can lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QRp9gOOUXn9GR-",
          "id": "1760",
          "name": "dumbbell goblet squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/25uf0-32iMLQGb",
          "id": "0313",
          "name": "dumbbell hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xW887okqdt3mil",
          "id": "1659",
          "name": "dumbbell hammer curl on exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kv-doc9zNZZvw1",
          "id": "0312",
          "name": "dumbbell hammer curl v. 2",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MaiOXgH-uTIJR8",
          "id": "2402",
          "name": "dumbbell hammer curls (with arm blaster)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SKcSr1dn7NaQbf",
          "id": "1664",
          "name": "dumbbell high curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0CneGIqjNpjkLA",
          "id": "3545",
          "name": "dumbbell incline alternate press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QHD3FDOxvqPSoX",
          "id": "0314",
          "name": "dumbbell incline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xEIpV-ZN2JZXZY",
          "id": "0315",
          "name": "dumbbell incline biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/U-3ssP3Mx-Q7W9",
          "id": "0316",
          "name": "dumbbell incline breeding",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nRwRmVUHH1GstP",
          "id": "0318",
          "name": "dumbbell incline curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/E19EABjy9dLjXd",
          "id": "0317",
          "name": "dumbbell incline curl v. 2",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/klTTNBnwUaiZFU",
          "id": "0319",
          "name": "dumbbell incline fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4zitjSRAzCeP9q",
          "id": "1278",
          "name": "dumbbell incline fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nOC0NOhP9Bh7h8",
          "id": "0320",
          "name": "dumbbell incline hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dKkN9p2uR1ld6V",
          "id": "0321",
          "name": "dumbbell incline hammer press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3iKiadlkREx4NF",
          "id": "1618",
          "name": "dumbbell incline hammer press on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Yqv-xndTpYKvIe",
          "id": "0322",
          "name": "dumbbell incline inner biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rmtApa6Oss1WXj",
          "id": "1279",
          "name": "dumbbell incline one arm fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/g8eyOvpcezOZsb",
          "id": "1280",
          "name": "dumbbell incline one arm fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M9QKuXiQwfTyRj",
          "id": "1619",
          "name": "dumbbell incline one arm hammer press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6Qk9yYYyGexOb7",
          "id": "1620",
          "name": "dumbbell incline one arm hammer press on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pvkVswnq2tWO3n",
          "id": "0323",
          "name": "dumbbell incline one arm lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pGDplmnY4xdmHS",
          "id": "1281",
          "name": "dumbbell incline one arm press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IfPkp3X0SmJ9Cf",
          "id": "1282",
          "name": "dumbbell incline one arm press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/K4PvNv6J6TS-IF",
          "id": "0324",
          "name": "dumbbell incline palm-in press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CVajrlvxxpE0pJ",
          "id": "1283",
          "name": "dumbbell incline press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jmhnH1jJPgTp-x",
          "id": "0325",
          "name": "dumbbell incline raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HPHpL56mFFNXH8",
          "id": "0326",
          "name": "dumbbell incline rear lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xZqm-LeARgyHNo",
          "id": "0327",
          "name": "dumbbell incline row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3inzMyFX4I488Y",
          "id": "0328",
          "name": "dumbbell incline shoulder raise",
          "target": "serratus anterior"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TstKAu2l31qcx4",
          "id": "0329",
          "name": "dumbbell incline shrug",
          "target": "traps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PuyACT0X7lEoNB",
          "id": "3542",
          "name": "dumbbell incline t-raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JT9ychjeKO2iVn",
          "id": "0330",
          "name": "dumbbell incline triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Cg4eiM-XK9ifgL",
          "id": "0331",
          "name": "dumbbell incline twisted flyes",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XsxZyoIbPFkKNC",
          "id": "1733",
          "name": "dumbbell incline two arm extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CcmKMmFgg6fD7K",
          "id": "3541",
          "name": "dumbbell incline y-raise",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ktshnMjZ2JABin",
          "id": "0332",
          "name": "dumbbell iron cross",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZYRkIGjOspfFT7",
          "id": "0333",
          "name": "dumbbell kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XsuAwdwck68xi5",
          "id": "1734",
          "name": "dumbbell kickbacks on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4YlEVjdveEJ9kS",
          "id": "1660",
          "name": "dumbbell kneeling bicep curl exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9PGV019UGODGTF",
          "id": "0334",
          "name": "dumbbell lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qzEtGAyLbnqaHe",
          "id": "0335",
          "name": "dumbbell lateral to front raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eh9fjQ0SrlPRfp",
          "id": "0336",
          "name": "dumbbell lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cUehvLcs9odZXO",
          "id": "1658",
          "name": "dumbbell lunge with bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jMOW1BqyyDfzEA",
          "id": "0337",
          "name": "dumbbell lying  extension (across face)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xrRT0XUlQHgrCf",
          "id": "1729",
          "name": "dumbbell lying alternate extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6fWgkhA3CK-aDM",
          "id": "0338",
          "name": "dumbbell lying elbow press",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fR3FWk6sWiG5Fj",
          "id": "0863",
          "name": "dumbbell lying external shoulder rotation",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/r3zgHD-xn6ox-U",
          "id": "0339",
          "name": "dumbbell lying femoral",
          "target": "hamstrings"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OYlOQvv5kqFYpZ",
          "id": "0340",
          "name": "dumbbell lying hammer press",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lBxCKJm2H3LvZ6",
          "id": "2470",
          "name": "dumbbell lying on floor rear delt raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YlTDtEpJbV1aaK",
          "id": "0341",
          "name": "dumbbell lying one arm deltoid rear",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Cw9NAC-34Q9xQG",
          "id": "0343",
          "name": "dumbbell lying one arm press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PxhXdhxwvejTZS",
          "id": "0342",
          "name": "dumbbell lying one arm press v. 2",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pVDAAZQ3FW2opK",
          "id": "0344",
          "name": "dumbbell lying one arm pronated triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jlcPYnUbMmm1su",
          "id": "0345",
          "name": "dumbbell lying one arm rear lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KQ1YollZb6mCUN",
          "id": "0346",
          "name": "dumbbell lying one arm supinated triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/llDLhlFUsdgjNc",
          "id": "0347",
          "name": "dumbbell lying pronation",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/figuTatKtSC8zw",
          "id": "2705",
          "name": "dumbbell lying pronation on floor",
          "target": "forearms"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1dmgTwtZIzc9zJ",
          "id": "1284",
          "name": "dumbbell lying pullover on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/o8UC30Osl9E2xz",
          "id": "1328",
          "name": "dumbbell lying rear delt row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hUmLiQc5zev7Jk",
          "id": "0348",
          "name": "dumbbell lying rear lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kdLuxq61YuaT4y",
          "id": "1735",
          "name": "dumbbell lying single extension",
          "target": "triceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/S4gxK6AXSbmAD5",
          "id": "0349",
          "name": "dumbbell lying supination",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OiZHpTNfWTaEIS",
          "id": "2706",
          "name": "dumbbell lying supination on floor",
          "target": "forearms"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/E8kEqrwYKX4PC4",
          "id": "1661",
          "name": "dumbbell lying supine biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SMnNshTl91bePd",
          "id": "0350",
          "name": "dumbbell lying supine curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/orjdGCX7V5bMzE",
          "id": "0351",
          "name": "dumbbell lying triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XDjQX6v3UPvNjj",
          "id": "1662",
          "name": "dumbbell lying wide curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Mg15WBQKWTQid5",
          "id": "0352",
          "name": "dumbbell neutral grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EijRz5gh5RQj9a",
          "id": "1285",
          "name": "dumbbell one arm bench fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9XC3AHurk8UIYm",
          "id": "0292",
          "name": "dumbbell one arm bent-over row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/f8klhdIal2qru1",
          "id": "1286",
          "name": "dumbbell one arm chest fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HLZqoLAQ39g-Bk",
          "id": "0353",
          "name": "dumbbell one arm concetration curl (on stability ball)",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/i2fEqeeXap4NZ-",
          "id": "1287",
          "name": "dumbbell one arm decline chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/21M-EC5x5J1zE1",
          "id": "1288",
          "name": "dumbbell one arm fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4RaEZXUB09LndC",
          "id": "1736",
          "name": "dumbbell one arm french press on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RbT2iQq6YnhNid",
          "id": "1663",
          "name": "dumbbell one arm hammer preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UuSMu4K4S6-SNT",
          "id": "1621",
          "name": "dumbbell one arm hammer press on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iXdMy1eGXdCh1E",
          "id": "1289",
          "name": "dumbbell one arm incline chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mDIkz7ZXqJsoEv",
          "id": "0354",
          "name": "dumbbell one arm kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/j5iN7YFGzCMmei",
          "id": "0355",
          "name": "dumbbell one arm lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CRPJy-u3zO8XT-",
          "id": "0356",
          "name": "dumbbell one arm lateral raise with support",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pAfBnYcpKE2rIL",
          "id": "1290",
          "name": "dumbbell one arm press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xBBwznY2uCzgkH",
          "id": "1665",
          "name": "dumbbell one arm prone curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/z0tNGTyEWJZque",
          "id": "1666",
          "name": "dumbbell one arm prone hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vdf0TL-m-mmW8J",
          "id": "1291",
          "name": "dumbbell one arm pullover on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7lKdkojpsluoey",
          "id": "0358",
          "name": "dumbbell one arm revers wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nK-nB7APO8mDR-",
          "id": "0359",
          "name": "dumbbell one arm reverse fly (with support)",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/D7drDL5sqIdEtr",
          "id": "1622",
          "name": "dumbbell one arm reverse grip press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/y2i9nWbIYRyeCN",
          "id": "1414",
          "name": "dumbbell one arm reverse preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mLyRS6RhXXs2A8",
          "id": "1667",
          "name": "dumbbell one arm reverse spider curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/L5DJUrDdNFgPbC",
          "id": "1668",
          "name": "dumbbell one arm seated bicep curl on exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5UCW77rj1YuuGu",
          "id": "1669",
          "name": "dumbbell one arm seated hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w8znRpRcMLndd8",
          "id": "1415",
          "name": "dumbbell one arm seated neutral wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/T-lfllclI6uida",
          "id": "0361",
          "name": "dumbbell one arm shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VZIZNAz8AgDja5",
          "id": "0360",
          "name": "dumbbell one arm shoulder press v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-MZ9oQ-WDgGpKw",
          "id": "3888",
          "name": "dumbbell one arm snatch",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OmXi1psPDUbc8u",
          "id": "1670",
          "name": "dumbbell one arm standing curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tKYC0S81jwcfgp",
          "id": "1671",
          "name": "dumbbell one arm standing hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wtFVJCE1mUYafj",
          "id": "0362",
          "name": "dumbbell one arm triceps extension (on bench)",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/S0dvK749CN3rh5",
          "id": "0363",
          "name": "dumbbell one arm upright row",
          "target": "delts"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OiNp0X1hMDvhUO",
          "id": "0364",
          "name": "dumbbell one arm wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bezRciPIERa9iF",
          "id": "1672",
          "name": "dumbbell one arm zottman preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aUtpKaLTU5Wjj4",
          "id": "1292",
          "name": "dumbbell one leg fly on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ClCz2pEj98aRkO",
          "id": "0365",
          "name": "dumbbell over bench neutral wrist curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LIz3Y8d--q4IjR",
          "id": "0366",
          "name": "dumbbell over bench one arm  neutral wrist curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eAc7GjGYrIZiVD",
          "id": "1441",
          "name": "dumbbell over bench one arm reverse wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7hfEl4g5ZE4ro0",
          "id": "0367",
          "name": "dumbbell over bench one arm wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GUXX-b7hkEgFRv",
          "id": "0368",
          "name": "dumbbell over bench revers wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JNFNxg5tHXII0G",
          "id": "0369",
          "name": "dumbbell over bench wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fZ-UE2FqcIT2Vq",
          "id": "1329",
          "name": "dumbbell palm rotational bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/s7Rbh4HpbU0JIb",
          "id": "1623",
          "name": "dumbbell palms in incline bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sO8OhoccPigI4f",
          "id": "0370",
          "name": "dumbbell peacher hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EhGgbV0wgsIjHN",
          "id": "0371",
          "name": "dumbbell plyo squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NqkUi5IpCht-xb",
          "id": "0372",
          "name": "dumbbell preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LnzC-lrQfSX5nf",
          "id": "1673",
          "name": "dumbbell preacher curl over exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0SB7-qCWvA2D0o",
          "id": "1293",
          "name": "dumbbell press on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mi22JSLwf009fC",
          "id": "0373",
          "name": "dumbbell pronate-grip triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SVegCVunvFpm4a",
          "id": "0374",
          "name": "dumbbell prone incline curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qJtOKNQeY3Zl4C",
          "id": "1674",
          "name": "dumbbell prone incline hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/boGHimvOovZzX9",
          "id": "0375",
          "name": "dumbbell pullover",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ugE7VJh24PduQf",
          "id": "1294",
          "name": "dumbbell pullover hip extension on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Mt4ZVDJSIGc8OD",
          "id": "1295",
          "name": "dumbbell pullover on exercise ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gVtYtm6LY9Tl-a",
          "id": "1700",
          "name": "dumbbell push press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1zJ0eOOo72vmD3",
          "id": "0376",
          "name": "dumbbell raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QyEEeTDwXIbfOj",
          "id": "2292",
          "name": "dumbbell rear delt raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QdEYeOsFcL7TM4",
          "id": "0377",
          "name": "dumbbell rear delt row_shoulder",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qt841dR63TikKv",
          "id": "0378",
          "name": "dumbbell rear fly",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AHDmXElbBTmrlP",
          "id": "0380",
          "name": "dumbbell rear lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/C7lAQsMQJfxIgD",
          "id": "0379",
          "name": "dumbbell rear lateral raise (support head)",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lxNG2-qoZ0Ne-Z",
          "id": "0381",
          "name": "dumbbell rear lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/J7QiPcRgDUhgsX",
          "id": "0382",
          "name": "dumbbell revers grip biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eCnGcfDdBO13w9",
          "id": "1624",
          "name": "dumbbell reverse bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6FSehksqd0sxzd",
          "id": "0383",
          "name": "dumbbell reverse fly",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ecubjkE9av2qkS",
          "id": "1330",
          "name": "dumbbell reverse grip incline bench one arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Xvhq4wliGHkZIi",
          "id": "1331",
          "name": "dumbbell reverse grip incline bench two arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UPuU7S7FTeMyOe",
          "id": "2327",
          "name": "dumbbell reverse grip row (female)",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Rf2GPzof0ptuD7",
          "id": "0384",
          "name": "dumbbell reverse preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tvod1RPUZ-1sGN",
          "id": "1675",
          "name": "dumbbell reverse spider curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Bs8v7HnaHTRpD3",
          "id": "0385",
          "name": "dumbbell reverse wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KhTHid4upto9Q2",
          "id": "1459",
          "name": "dumbbell romanian deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ANHXaV1ab7Lfdx",
          "id": "0386",
          "name": "dumbbell rotation reverse fly",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lpYjkR9BFdz0vr",
          "id": "2397",
          "name": "dumbbell scott press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AqciTG05B-9dow",
          "id": "0387",
          "name": "dumbbell seated alternate front raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WOUUCtsoINYWhM",
          "id": "1676",
          "name": "dumbbell seated alternate hammer curl on exercise ball",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SOnxNueqOKGK4a",
          "id": "0388",
          "name": "dumbbell seated alternate press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3A5QhECTZceLPo",
          "id": "3546",
          "name": "dumbbell seated alternate shoulder",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yTpvCrHNf9oA1C",
          "id": "0389",
          "name": "dumbbell seated bench extension",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0f9XwwFYN8818N",
          "id": "2317",
          "name": "dumbbell seated bent arm lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/77ookwVbGjU-Wm",
          "id": "1730",
          "name": "dumbbell seated bent over alternate kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qTt-cAd6cbe5Fc",
          "id": "1737",
          "name": "dumbbell seated bent over triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oqQFxUvvAVPF39",
          "id": "1677",
          "name": "dumbbell seated bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x1iJWcij0iGCZB",
          "id": "0390",
          "name": "dumbbell seated biceps curl (on stability ball)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iXaPG74sSlKLi7",
          "id": "3547",
          "name": "dumbbell seated biceps curl to shoulder press",
          "target": "biceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NvX8RNt-InVpSn",
          "id": "1379",
          "name": "dumbbell seated calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2pnBDDHlv6-g-a",
          "id": "0391",
          "name": "dumbbell seated curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ADJ5vihkGRdoIU",
          "id": "0392",
          "name": "dumbbell seated front raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SnZfVGOEVSIDAK",
          "id": "1678",
          "name": "dumbbell seated hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/innpbrAkHzQyqm",
          "id": "0393",
          "name": "dumbbell seated inner biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jZEIPuAZOKIZM0",
          "id": "0394",
          "name": "dumbbell seated kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nmJ8vfnUTzJLaX",
          "id": "0396",
          "name": "dumbbell seated lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VJLmXp4KxA1l0J",
          "id": "0395",
          "name": "dumbbell seated lateral raise v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8rQzG8O9aFhEO1",
          "id": "0397",
          "name": "dumbbell seated neutral wrist curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9ZSiAJV5E4OFCf",
          "id": "1679",
          "name": "dumbbell seated one arm bicep curl on exercise ball with leg raised",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lrHrX62c0XhZgH",
          "id": "0398",
          "name": "dumbbell seated one arm kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qMT6VtUQP9Sb0t",
          "id": "0399",
          "name": "dumbbell seated one arm rotate",
          "target": "forearms"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KpW4CbMvDDIl83",
          "id": "0400",
          "name": "dumbbell seated one leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bULtjcOrtEddXn",
          "id": "1380",
          "name": "dumbbell seated one leg calf raise - hammer grip",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/q0s0uCh8sD-LN9",
          "id": "1381",
          "name": "dumbbell seated one leg calf raise - palm up",
          "target": "calves"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZGvdahDA6M3nUu",
          "id": "0401",
          "name": "dumbbell seated palms up wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dwMNu3DrrSVf8V",
          "id": "0402",
          "name": "dumbbell seated preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vtlifGdmYytIOW",
          "id": "0403",
          "name": "dumbbell seated revers grip concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vVedL64jKtS3K3",
          "id": "1738",
          "name": "dumbbell seated reverse grip one arm overhead tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xWaYFecK5oXzCm",
          "id": "0405",
          "name": "dumbbell seated shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NIkMKevYSDMpC-",
          "id": "0404",
          "name": "dumbbell seated shoulder press (parallel grip)",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7qgXvPqHv37kwT",
          "id": "2188",
          "name": "dumbbell seated triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OPUst5Ck54n0u3",
          "id": "0406",
          "name": "dumbbell shrug",
          "target": "traps"
        },
        {
          "bodyPart": "waist",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/t5xJbgmueTAPlL",
          "id": "0407",
          "name": "dumbbell side bend",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pBgqrgeryl0uVt",
          "id": "0408",
          "name": "dumbbell side lying one hand raise",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/29Hnm8DUYent73",
          "id": "3664",
          "name": "dumbbell side plank with rear fly",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1LmGT18TwToQAA",
          "id": "3548",
          "name": "dumbbell single arm overhead carry",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZJ54B9L6gcW2pm",
          "id": "0409",
          "name": "dumbbell single leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LyrldPF3FD1o6l",
          "id": "1757",
          "name": "dumbbell single leg deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FmfU7kxfANkzes",
          "id": "2805",
          "name": "dumbbell single leg deadlift with stepbox support",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/T1NkTdpK7HzBzn",
          "id": "0410",
          "name": "dumbbell single leg split squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M2sfCSP23UNxOo",
          "id": "0411",
          "name": "dumbbell single leg squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ReAtcYKYSMQlGG",
          "id": "0413",
          "name": "dumbbell squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xfaEzQ3mi6k5pp",
          "id": "3560",
          "name": "dumbbell standing alternate hammer curl and press",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HjXgh3xyyLv7U1",
          "id": "0414",
          "name": "dumbbell standing alternate overhead press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5tM-gVD2nMrKU4",
          "id": "0415",
          "name": "dumbbell standing alternate raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ShZJLloV1Foojq",
          "id": "1739",
          "name": "dumbbell standing alternating tricep kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nn-plbzKXfLl08",
          "id": "2143",
          "name": "dumbbell standing around world",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jh7US6C4cEDuAi",
          "id": "1740",
          "name": "dumbbell standing bent over one arm triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nHPLNFmdL7L-kA",
          "id": "1741",
          "name": "dumbbell standing bent over two arm triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cCQj-v1M1FZ7Nc",
          "id": "0416",
          "name": "dumbbell standing biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Lb239ZB4mJGIMX",
          "id": "0417",
          "name": "dumbbell standing calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CbyrOINJAtcw7y",
          "id": "0418",
          "name": "dumbbell standing concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yvNrg7DIXwPdqh",
          "id": "0419",
          "name": "dumbbell standing front raise above head",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4gYQB2IKrhjhFj",
          "id": "2321",
          "name": "dumbbell standing inner biceps curl v. 2",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sH2-g6asXnIfwW",
          "id": "0420",
          "name": "dumbbell standing kickback",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XNx8KIWBxRoXud",
          "id": "0421",
          "name": "dumbbell standing one arm concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/il8NMtGz-aU1n0",
          "id": "0422",
          "name": "dumbbell standing one arm curl (over incline bench)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EFxlHgkqnfBvto",
          "id": "1680",
          "name": "dumbbell standing one arm curl over incline bench",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/K3S3usIh8rF5HN",
          "id": "0423",
          "name": "dumbbell standing one arm extension",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aMb2BYuwUWKcro",
          "id": "0424",
          "name": "dumbbell standing one arm palm in press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AxkEwrQDZHmHGD",
          "id": "0425",
          "name": "dumbbell standing one arm reverse curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QXMNGz88yWgn4z",
          "id": "0426",
          "name": "dumbbell standing overhead press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xHpTgYWHDMfXAk",
          "id": "0427",
          "name": "dumbbell standing palms in press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Js9T1SM9Q94Sfg",
          "id": "0428",
          "name": "dumbbell standing preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wLD3pK1X5dkEIo",
          "id": "0429",
          "name": "dumbbell standing reverse curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/36L-YhZ2k-wYy3",
          "id": "0430",
          "name": "dumbbell standing triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ixvXBFFxcFgDyG",
          "id": "2293",
          "name": "dumbbell standing zottman preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Tb4b2cVJRFKzrn",
          "id": "1684",
          "name": "dumbbell step up single leg balance with bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wAImiXIdgDfFcm",
          "id": "0431",
          "name": "dumbbell step-up",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OH1lHlm01X6qBx",
          "id": "2796",
          "name": "dumbbell step-up lunge",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w3aHVBFofUmQ0J",
          "id": "2812",
          "name": "dumbbell step-up split squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/k4KBpOGZsFryz8",
          "id": "0432",
          "name": "dumbbell stiff leg deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TIWFQd8A7UJq0M",
          "id": "0433",
          "name": "dumbbell straight arm pullover",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RBtjM5StIH9XMY",
          "id": "0434",
          "name": "dumbbell straight leg deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wIKw3f5uDF5RLW",
          "id": "2808",
          "name": "dumbbell sumo pull through",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AKJERQxpszwF1Z",
          "id": "2803",
          "name": "dumbbell supported squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iS6GxEg6DSzp1l",
          "id": "0436",
          "name": "dumbbell tate press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-UIKDKMZSMOlI6",
          "id": "1742",
          "name": "dumbbell tricep kickback with stork stance",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1TIw-rhf96Do9p",
          "id": "1743",
          "name": "dumbbell twisting bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5fh2DG0hLtZTvC",
          "id": "0437",
          "name": "dumbbell upright row",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dVRe9JOSUHZNKL",
          "id": "1765",
          "name": "dumbbell upright row (back pov)",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yqxmZVMRXy8sOV",
          "id": "0864",
          "name": "dumbbell upright shoulder external rotation",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LFl7Eymvw8vrNC",
          "id": "5201",
          "name": "dumbbell waiter biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-8hdVW6eYtEX9D",
          "id": "0438",
          "name": "dumbbell w-press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZJccNEab8EjhP2",
          "id": "0439",
          "name": "dumbbell zottman curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lhJd-2m2xNT910",
          "id": "2294",
          "name": "dumbbell zottman preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TKqiHPGApnRU6t",
          "id": "2189",
          "name": "dumbbells seated triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oO6uY-7cFHyNGy",
          "id": "1167",
          "name": "dynamic chest stretch (male)",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OGRs5Se5edwYn4",
          "id": "3287",
          "name": "elbow dips",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/r0vmmsxXwfBl6X",
          "id": "1772",
          "name": "elbow lift - reverse push-up",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fcBRvf2sg6U72u",
          "id": "0443",
          "name": "elbow-to-knee",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Qq2CeMvVX71H-H",
          "id": "3292",
          "name": "elevator",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LfswlpiO1UCLQ3",
          "id": "1332",
          "name": "exercise ball alternating arm ups",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FBbR3SZf3bIHj2",
          "id": "1333",
          "name": "exercise ball back extension with arms extended",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GhetcBfmvWq6h8",
          "id": "1334",
          "name": "exercise ball back extension with hands behind head",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qiNaZIN23dQhzO",
          "id": "1335",
          "name": "exercise ball back extension with knees off ground",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/u9MP4fx5YFP9rw",
          "id": "1336",
          "name": "exercise ball back extension with rotation",
          "target": "spine"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/r67o9gq1yoC0aM",
          "id": "1744",
          "name": "exercise ball dip",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7y78yH3SBGjFUY",
          "id": "1559",
          "name": "exercise ball hip flexor stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1sW04WJlQeQxl0",
          "id": "1338",
          "name": "exercise ball hug",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UG2fGuumL02Uyz",
          "id": "1339",
          "name": "exercise ball lat stretch",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VMxxzVtwywHYML",
          "id": "1341",
          "name": "exercise ball lower back stretch (pyramid)",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WOpXdjhJpMfUDc",
          "id": "1342",
          "name": "exercise ball lying side lat stretch",
          "target": "lats"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HLwoi9dvAzsPms",
          "id": "1382",
          "name": "exercise ball on the wall calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EgLg9HKjZm-faF",
          "id": "3241",
          "name": "exercise ball on the wall calf raise (tennis ball between ankles)",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-HALDFbpduChhu",
          "id": "3240",
          "name": "exercise ball on the wall calf raise (tennis ball between knees)",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Pq8ytauXBBUiOE",
          "id": "1416",
          "name": "exercise ball one leg prone lower body rotation",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RtYcqA0y9kmjaB",
          "id": "1417",
          "name": "exercise ball one legged diagonal kick hamstring curl",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rrZ2eA-gn58t2l",
          "id": "1296",
          "name": "exercise ball pike push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MEwMC6cEfk3AHU",
          "id": "1343",
          "name": "exercise ball prone leg raise",
          "target": "spine"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NjETRTjWQ6-G7p",
          "id": "1560",
          "name": "exercise ball seated hamstring stretch",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JfVNSbGKQ4aFdm",
          "id": "1745",
          "name": "exercise ball seated triceps stretch",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/W7IotFLfvjxGkS",
          "id": "1746",
          "name": "exercise ball supine triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RRiKUMVBqafYZG",
          "id": "1747",
          "name": "ez bar french press on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qH3c1OLFHx88gE",
          "id": "3010",
          "name": "ez bar lying bent arms pullover",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x7Vd0la07uvUrK",
          "id": "1748",
          "name": "ez bar lying close grip triceps extension behind head",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KuVv-c9IQMmOhD",
          "id": "1344",
          "name": "ez bar reverse grip bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JwEwzmzz-CkWR9",
          "id": "1682",
          "name": "ez bar seated close grip concentration curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1G4udgC3qKn5Xs",
          "id": "1749",
          "name": "ez bar standing french press",
          "target": "triceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/npoO7OElaYz-Z2",
          "id": "0445",
          "name": "ez barbell anti gravity press",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9EvsmfjJAR2DqO",
          "id": "1627",
          "name": "ez barbell close grip preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xc1JD89dP0mIiE",
          "id": "0446",
          "name": "ez barbell close-grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dUlJOLYx3s-idN",
          "id": "0447",
          "name": "ez barbell curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/f2nFugtnzTqp2Q",
          "id": "0448",
          "name": "ez barbell decline close grip face press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lljQk4nqMn5-qV",
          "id": "2186",
          "name": "ez barbell decline triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gKBXAYgtRAJb3Q",
          "id": "0449",
          "name": "ez barbell incline triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HwyQJrarqRP86O",
          "id": "0450",
          "name": "ez barbell jm bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/j6LV2kqvBLY-Yl",
          "id": "0451",
          "name": "ez barbell reverse grip curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lZKD7MGF5RRo4G",
          "id": "0452",
          "name": "ez barbell reverse grip preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0MRC7hDPOdUSiD",
          "id": "1458",
          "name": "ez barbell seated curls",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rh5jU7l-v0WW73",
          "id": "0453",
          "name": "ez barbell seated triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sIPhI4JKMagIBu",
          "id": "0454",
          "name": "ez barbell spider curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ITTBz22JRmIKs1",
          "id": "1628",
          "name": "ez barbell spider curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mzwS9ho8vP04XF",
          "id": "2404",
          "name": "ez-bar biceps curl (with arm blaster)",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7thmnKyzyLoZOo",
          "id": "2432",
          "name": "ez-bar close-grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "ez barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rZhInyvQqzOHZZ",
          "id": "2741",
          "name": "ez-barbell standing wide grip biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hJy8r2wmatYMSp",
          "id": "2133",
          "name": "farmers walk",
          "target": "quads"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Zy01pGW3VWnzDv",
          "id": "0455",
          "name": "finger curls",
          "target": "forearms"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FozC2d1fobO5ZB",
          "id": "3303",
          "name": "flag",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ugc6UNcGzzSoDh",
          "id": "0456",
          "name": "flexion leg sit up (bent knee)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iQI8avDfjUyPs5",
          "id": "0457",
          "name": "flexion leg sit up (straight arm)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0ocX2ZyNy-zcic",
          "id": "0458",
          "name": "floor fly (with barbell)",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JVtr2-6meZj0rU",
          "id": "0459",
          "name": "flutter kicks",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/O7Yq5H-9tg-UyN",
          "id": "1472",
          "name": "forward jump",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/59Yr4JygCGf3Sl",
          "id": "3470",
          "name": "forward lunge (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gGmWLp5ZhFc6Jg",
          "id": "3194",
          "name": "frankenstein squat",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zy1aI4-SK7nioE",
          "id": "2429",
          "name": "frog crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QPiPSt0UqQNfGt",
          "id": "3301",
          "name": "frog planche",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WqEAMQFV98D7RH",
          "id": "3296",
          "name": "front lever",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DTbOl-BLyaV4Fr",
          "id": "3295",
          "name": "front lever reps",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/78UFtLum9Qa7rc",
          "id": "0464",
          "name": "front plank with twist",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wG1mlY5EFrn89E",
          "id": "3315",
          "name": "full maltese",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rZ9unOPQv3Tqo5",
          "id": "3299",
          "name": "full planche",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7cx119k609Kupp",
          "id": "3327",
          "name": "full planche push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/z3edCbuGQqdBg2",
          "id": "0466",
          "name": "gironda sternum chin",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8ubmdj0sJZDAv4",
          "id": "3561",
          "name": "glute bridge march",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dTR67P8VSGVC8j",
          "id": "3523",
          "name": "glute bridge two legs on bench (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aWge2OFiMxkLbs",
          "id": "3193",
          "name": "glute-ham raise",
          "target": "hamstrings"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WZfRIIonGZ0PLm",
          "id": "0467",
          "name": "gorilla chin",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w9mI9hCDiFiAQU",
          "id": "0469",
          "name": "groin crunch",
          "target": "abs"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zi3Ze6jGG9RxYd",
          "id": "1383",
          "name": "hack calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6J5hiXnmTRTj8h",
          "id": "1384",
          "name": "hack one leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MhO0Ce1DQXIYMc",
          "id": "3221",
          "name": "half knee bends (male)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wtX23kMubXCH7B",
          "id": "3202",
          "name": "half sit-up (male)",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9n2thSO73NrJDO",
          "id": "1511",
          "name": "hamstring stretch",
          "target": "hamstrings"
        },
        {
          "bodyPart": "chest",
          "equipment": "upper body ergometer",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jASP98F6qcd145",
          "id": "2139",
          "name": "hands bike",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cZRrNq8LeVUxNM",
          "id": "3218",
          "name": "hands clasped circular toe touch (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0SZv3kYjTJyw0D",
          "id": "3215",
          "name": "hands reversed clasped circular toe touch (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2TnGMAUbCPxeh2",
          "id": "3302",
          "name": "handstand",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/POVfH7Xum32VHW",
          "id": "0471",
          "name": "handstand push-up",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rhujDAWYFsDk5w",
          "id": "1764",
          "name": "hanging leg hip raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/97PNdoIvCIXmOD",
          "id": "0472",
          "name": "hanging leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bwH3P2lQkrm8WC",
          "id": "1761",
          "name": "hanging oblique knee raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NlMwfX2zxBb-hG",
          "id": "0473",
          "name": "hanging pike",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/C9f1CKcbHZI2P5",
          "id": "0474",
          "name": "hanging straight leg hip raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-o9Gzox6E1Qb4O",
          "id": "0475",
          "name": "hanging straight leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/otMPOcZyLW4ett",
          "id": "0476",
          "name": "hanging straight twisting leg hip raise",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EBK9bq3N2xXoMv",
          "id": "3636",
          "name": "high knee against wall",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3wW8qFcwzgHoqz",
          "id": "0484",
          "name": "hip raise (bent knee)",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eIw2UzAvkXEMmv",
          "id": "1418",
          "name": "hug keens to chest",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9gQCdHP6WkNHh6",
          "id": "3234",
          "name": "hyght dumbbell fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fOhmegJtKOakp-",
          "id": "0489",
          "name": "hyperextension",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/G7SiDcfyiCe9pW",
          "id": "0488",
          "name": "hyperextension (on bench)",
          "target": "spine"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qYCbHILMvueKo7",
          "id": "3289",
          "name": "impossible dips",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wE6TeJKsUCSzSi",
          "id": "1471",
          "name": "inchworm",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hwRqdNKg9sldP7",
          "id": "3698",
          "name": "inchworm v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5ufZpFNZXeoRCs",
          "id": "0490",
          "name": "incline close-grip push-up",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/k46FhOGXk9swtq",
          "id": "0491",
          "name": "incline leg hip raise (leg straight)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IREt8fdo1ywC8R",
          "id": "0492",
          "name": "incline push up depth jump",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TeSwNzxryNRWzO",
          "id": "0493",
          "name": "incline push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RSxvFaZaLfN9ns",
          "id": "3785",
          "name": "incline push-up (on box)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zUXncqTeuwmHF6",
          "id": "0494",
          "name": "incline reverse grip push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BlX2tmtmYawgE6",
          "id": "3011",
          "name": "incline scapula push up",
          "target": "serratus anterior"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Xvx7fRFroULGPw",
          "id": "0495",
          "name": "incline twisting sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6DyV7obBuz9FgT",
          "id": "1564",
          "name": "intermediate hip flexor and quad stretch",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lus8LjDLIvUMMf",
          "id": "0496",
          "name": "inverse leg curl (bench support)",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/my8xrxaTaNJMk1",
          "id": "2400",
          "name": "inverse leg curl (on pull-up cable machine)",
          "target": "hamstrings"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HqOexpMwgAfx0f",
          "id": "0499",
          "name": "inverted row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vIMv6gBMLwQniT",
          "id": "2300",
          "name": "inverted row bent knees",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/K8JFRnHXtEBj48",
          "id": "2298",
          "name": "inverted row on bench",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xvV-c1tjRB7ko6",
          "id": "0497",
          "name": "inverted row v. 2",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZI8xAKEp4pnK4W",
          "id": "0498",
          "name": "inverted row with straps",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DbbzsnNVySKJsA",
          "id": "1419",
          "name": "iron cross stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/B4ZFUC72nmG4QL",
          "id": "1297",
          "name": "isometric chest squeeze",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Mr6DQfJnltSMSH",
          "id": "0500",
          "name": "isometric wipers",
          "target": "pectorals"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/c7VRVNCdE-YuZ2",
          "id": "0501",
          "name": "jack burpee",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nJiUxe1lYvxg9q",
          "id": "3224",
          "name": "jack jump (male)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9o9LPc1DQyFG01",
          "id": "0507",
          "name": "jackknife sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kAnrGIpFZyXtRf",
          "id": "0508",
          "name": "janda sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FMtGC-tv0UjDhq",
          "id": "2612",
          "name": "jump rope",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wtZpBkF3q6ykh1",
          "id": "0514",
          "name": "jump squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3JKMhNLvRFbekI",
          "id": "0513",
          "name": "jump squat v. 2",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/szdMFRH1QNc6yo",
          "id": "0517",
          "name": "kettlebell advanced windmill",
          "target": "abs"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LnEzre6PvfM63h",
          "id": "0518",
          "name": "kettlebell alternating hang clean",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pRkMMkvkQyHGRn",
          "id": "0520",
          "name": "kettlebell alternating press",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EckoxyVhndxfZi",
          "id": "0519",
          "name": "kettlebell alternating press on floor",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YXoazFuU37sJxE",
          "id": "0521",
          "name": "kettlebell alternating renegade row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/s8vYNtcG1K4MTV",
          "id": "0522",
          "name": "kettlebell alternating row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UTUezQVyIkMUde",
          "id": "0523",
          "name": "kettlebell arnold press",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lTCIGt8Coxy79T",
          "id": "0524",
          "name": "kettlebell bent press",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wgi6Qt5t5Gznh7",
          "id": "0525",
          "name": "kettlebell bottoms up clean from the hang position",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/q1wj4JKJs4MmTM",
          "id": "0526",
          "name": "kettlebell double alternating hang clean",
          "target": "biceps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SFgEy-esqRfJQA",
          "id": "0527",
          "name": "kettlebell double jerk",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dpjZn6oIjFLOj7",
          "id": "0528",
          "name": "kettlebell double push press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ww8dKouLS3AvA1",
          "id": "0529",
          "name": "kettlebell double snatch",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hE1K30rfpw8JAp",
          "id": "0530",
          "name": "kettlebell double windmill",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SbClHwkjhAhxb0",
          "id": "0531",
          "name": "kettlebell extended range one arm press on floor",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ll5PAlmp-uZhTD",
          "id": "0532",
          "name": "kettlebell figure 8",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SQ-UDQQApoM8-5",
          "id": "0533",
          "name": "kettlebell front squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TMXTwCGb7DXiUX",
          "id": "0534",
          "name": "kettlebell goblet squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wyQt81snZJ9oPY",
          "id": "0535",
          "name": "kettlebell hang clean",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AfRGGQ5ZhZKhFL",
          "id": "0536",
          "name": "kettlebell lunge pass through",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2gn-tJMj8w6JGV",
          "id": "0537",
          "name": "kettlebell one arm clean and jerk",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iVZOMB3sm2WAzg",
          "id": "1298",
          "name": "kettlebell one arm floor press",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7iHnoqm7Oz9fkV",
          "id": "0538",
          "name": "kettlebell one arm jerk",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LDQGAWeYn1RJZR",
          "id": "0539",
          "name": "kettlebell one arm military press to the side",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w4QrE--C2B-Oa1",
          "id": "0540",
          "name": "kettlebell one arm push press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MqJDWEyNtNqN4B",
          "id": "0541",
          "name": "kettlebell one arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Oij4avHKm6Nsma",
          "id": "0542",
          "name": "kettlebell one arm snatch",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cfUidVudyUR2Z2",
          "id": "0543",
          "name": "kettlebell pirate supper legs",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fqATJPHb66NX-R",
          "id": "0544",
          "name": "kettlebell pistol squat",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/XPcGPNTrvFNtmy",
          "id": "0545",
          "name": "kettlebell plyo push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HuWE9vcAEIhj5T",
          "id": "0546",
          "name": "kettlebell seated press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7JN1XuKh8I0phI",
          "id": "1438",
          "name": "kettlebell seated two arm military press",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/b7kvrElMJyz5Zy",
          "id": "0547",
          "name": "kettlebell seesaw press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/h1WEXlvGetvuj0",
          "id": "0548",
          "name": "kettlebell sumo high pull",
          "target": "traps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9aL1c-KdvyqrCn",
          "id": "0549",
          "name": "kettlebell swing",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ha7USoK4g6moGY",
          "id": "0550",
          "name": "kettlebell thruster",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/r7oiAtxfeC4Xd7",
          "id": "0551",
          "name": "kettlebell turkish get up (squat style)",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hGyM8pdwlQ8n0q",
          "id": "0552",
          "name": "kettlebell two arm clean",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wldRJ7a09bdHd0",
          "id": "0553",
          "name": "kettlebell two arm military press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ly89Jk5Rip92cj",
          "id": "1345",
          "name": "kettlebell two arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "kettlebell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8qLejYtL98oLT2",
          "id": "0554",
          "name": "kettlebell windmill",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ua3AkGHZh-qDAZ",
          "id": "0555",
          "name": "kick out sit",
          "target": "hamstrings"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gkVRkKdJ3Ma2zs",
          "id": "0558",
          "name": "kipping muscle up",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vt7C62oNrBYh27",
          "id": "3640",
          "name": "knee touch crunch",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1icdbXSms4bv31",
          "id": "1420",
          "name": "kneeling jump squat",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LSMGrnY6ChxSxj",
          "id": "1346",
          "name": "kneeling lat stretch",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mHXEuJK-53F9gj",
          "id": "3239",
          "name": "kneeling plank tap shoulder (male)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ouwtee6Ritf75f",
          "id": "3211",
          "name": "kneeling push-up (male)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EFZzpuH-wWBj64",
          "id": "3288",
          "name": "korean dips",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/o4fPAF4Y8H6iWf",
          "id": "3418",
          "name": "l-pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/d9drbn4ZHyYY3z",
          "id": "3419",
          "name": "l-sit on floor",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/z4MyFDUGAq4SgL",
          "id": "0562",
          "name": "landmine 180",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pWN4P3yctDe6Jx",
          "id": "3237",
          "name": "landmine lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MziVYzWgPggZ5R",
          "id": "3300",
          "name": "lean planche",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/N7750gdB0v8EoW",
          "id": "2271",
          "name": "left hook. boxing",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3t7uZdB89nwvzY",
          "id": "0570",
          "name": "leg pull in flat bench",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-MLND-XLepsnTV",
          "id": "1576",
          "name": "leg up hamstring stretch",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2O8x2gFNmN4bF0",
          "id": "2287",
          "name": "lever alternate leg press ",
          "target": "quads"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LNYUZ8PJn5kpGm",
          "id": "0571",
          "name": "lever alternating narrow grip seated row ",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zPp9WTuMySneCi",
          "id": "0572",
          "name": "lever assisted chin-up",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dYWse5s8ekNX9Q",
          "id": "0573",
          "name": "lever back extension",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-MiDe1qhv0JiIl",
          "id": "0574",
          "name": "lever bent over row ",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gh7TDd6wRj9IoM",
          "id": "3200",
          "name": "lever bent-over row with v-bar ",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6zXdu4q9RmpiSu",
          "id": "0575",
          "name": "lever bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Sbx0fvrd6XUsiR",
          "id": "2289",
          "name": "lever calf press ",
          "target": "calves"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wNRnLV4jRqDCOm",
          "id": "0577",
          "name": "lever chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/npsLd1BVm0FhrU",
          "id": "0576",
          "name": "lever chest press ",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/m6dBeIGp0rrt0C",
          "id": "0578",
          "name": "lever deadlift ",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zNYHVSt6hs45VA",
          "id": "1300",
          "name": "lever decline chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dx4xaVBqFh8JW3",
          "id": "1253",
          "name": "lever donkey calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gvC6NUaPLBlp-o",
          "id": "0579",
          "name": "lever front pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rAsoXrLeLO80f3",
          "id": "0580",
          "name": "lever gripless shrug",
          "target": "traps"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gN-QJLVJxY-EsX",
          "id": "1439",
          "name": "lever gripless shrug v. 2",
          "target": "traps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/A-50mNDse3zTTV",
          "id": "2288",
          "name": "lever gripper hands ",
          "target": "forearms"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MI9ZLXA39EEG-k",
          "id": "1615",
          "name": "lever hammer grip preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6AnkgfTaIt18eD",
          "id": "0581",
          "name": "lever high row ",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8J49TLQPOUU7vB",
          "id": "2286",
          "name": "lever hip extension v. 2",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aO5NI2RlaZkZTq",
          "id": "2611",
          "name": "lever horizontal one leg press",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YRdEIhF69LBErQ",
          "id": "1299",
          "name": "lever incline chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/byk0SW348FiIJA",
          "id": "1479",
          "name": "lever incline chest press v. 2",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VU5IkLjZ3tOJkd",
          "id": "0582",
          "name": "lever kneeling leg curl ",
          "target": "hamstrings"
        },
        {
          "bodyPart": "waist",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kcLA7KHtpGLPPf",
          "id": "0583",
          "name": "lever kneeling twist",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/B5pP20XpsQotmY",
          "id": "0584",
          "name": "lever lateral raise",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8bCMbdijW08-RV",
          "id": "0585",
          "name": "lever leg extension",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eHR4AXSNGqBzlt",
          "id": "0586",
          "name": "lever lying leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ot-lhgqOocRfud",
          "id": "3195",
          "name": "lever lying two-one leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gv6xZ7g57TwaXy",
          "id": "0587",
          "name": "lever military press ",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SvzGdCwQKcSLGc",
          "id": "0588",
          "name": "lever narrow grip seated row ",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Srw01qLVV3gecC",
          "id": "0589",
          "name": "lever one arm bent over row ",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eWqQ6OPWmFSsob",
          "id": "1356",
          "name": "lever one arm lateral high row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/j-C40tV8fMycLM",
          "id": "1347",
          "name": "lever one arm lateral wide pulldown ",
          "target": "lats"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FbCVRIXZbRlJoO",
          "id": "0590",
          "name": "lever one arm shoulder press ",
          "target": "delts"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/T-qHSGVPh8jExn",
          "id": "0591",
          "name": "lever overhand triceps dip",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QzSH2GkX-vaycL",
          "id": "0592",
          "name": "lever preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/b1IcuhajuPZ5c9",
          "id": "1614",
          "name": "lever preacher curl v. 2",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/l6QHLb-e8SFpIA",
          "id": "2285",
          "name": "lever pullover ",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YFjlcLQoKiArfx",
          "id": "2736",
          "name": "lever reverse grip lateral pulldown ",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VZhxsb3OpfkpZY",
          "id": "1616",
          "name": "lever reverse grip preacher curl",
          "target": "biceps"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LwwDcyp7cf3Btq",
          "id": "1348",
          "name": "lever reverse grip vertical row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6BVkaICjbhgypn",
          "id": "0593",
          "name": "lever reverse hyperextension ",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/SHA1VgURzjriK6",
          "id": "1349",
          "name": "lever reverse t-bar row",
          "target": "upper back"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4W2KKsHC40SVLq",
          "id": "2315",
          "name": "lever rotary calf",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6HWBHg2bHb7jFI",
          "id": "2335",
          "name": "lever seated calf press",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6oGB-yBDW8c6VV",
          "id": "0594",
          "name": "lever seated calf raise ",
          "target": "calves"
        },
        {
          "bodyPart": "waist",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/T8pEAqFzSRlEH4",
          "id": "1452",
          "name": "lever seated crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Cn03POhnyNwDoD",
          "id": "0595",
          "name": "lever seated crunch (chest pad)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8wXumUe3AWd0j4",
          "id": "3760",
          "name": "lever seated crunch v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UJ4Cj3weMkZCI7",
          "id": "1451",
          "name": "lever seated dip",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BYkrW9rtqCQVlz",
          "id": "0596",
          "name": "lever seated fly",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DOzxdxopH2jeUG",
          "id": "3759",
          "name": "lever seated good morning",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WnadORQiTTciNA",
          "id": "0597",
          "name": "lever seated hip abduction",
          "target": "abductors"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1ODk6HaIZzjw4n",
          "id": "0598",
          "name": "lever seated hip adduction",
          "target": "adductors"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FXFXDCNtNuGuED",
          "id": "0599",
          "name": "lever seated leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "waist",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5icRfevbKRsHp7",
          "id": "0600",
          "name": "lever seated leg raise crunch ",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AAiWLXEOSqJWOT",
          "id": "0602",
          "name": "lever seated reverse fly",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OmrlgFShB6IqaJ",
          "id": "0601",
          "name": "lever seated reverse fly (parallel grip)",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/88F4mYKE7zdeWb",
          "id": "1350",
          "name": "lever seated row",
          "target": "upper back"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZzO4X2cVEtJThr",
          "id": "1385",
          "name": "lever seated squat calf raise on leg press machine",
          "target": "calves"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ehiF6hT1Jcf5u2",
          "id": "0603",
          "name": "lever shoulder press ",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KFVqm0Msgz0qTe",
          "id": "0869",
          "name": "lever shoulder press  v. 2",
          "target": "delts"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nBZnFDgtdKwJ4n",
          "id": "2318",
          "name": "lever shoulder press  v. 3",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/e3kCUWz-Q0764U",
          "id": "0604",
          "name": "lever shrug ",
          "target": "traps"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/34gnZAfy8LqqRj",
          "id": "0605",
          "name": "lever standing calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Q179qw-SGz6jaI",
          "id": "3758",
          "name": "lever standing chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ClKmpIsofMOZzd",
          "id": "0606",
          "name": "lever t bar row ",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kxoFEDMLj9YMaE",
          "id": "1351",
          "name": "lever t-bar reverse grip row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/STIgBoyjCjqD7O",
          "id": "0607",
          "name": "lever triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dljtfHb4G8iSaQ",
          "id": "1313",
          "name": "lever unilateral row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/r6oDb1dKEqu5u8",
          "id": "0609",
          "name": "london bridge",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/agWjqVP64NKxNu",
          "id": "3013",
          "name": "low glute bridge on floor",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3GfoFLBR1YX7qW",
          "id": "1352",
          "name": "lower back curl",
          "target": "spine"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dV-dAZHQ5PIMvK",
          "id": "3582",
          "name": "lunge with jump",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6ZcKztX-LDYyk7",
          "id": "1688",
          "name": "lunge with twist",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GbTll7NmDB1a0B",
          "id": "0613",
          "name": "lying (side) quads stretch",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/i4Uz64gZGIBmE3",
          "id": "2312",
          "name": "lying elbow to knee",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sgQlCtdnW764RB",
          "id": "0620",
          "name": "lying leg raise flat bench",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5xzxxGvuwh42jC",
          "id": "0865",
          "name": "lying leg-hip raise",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GfQXyrNfgeiyLY",
          "id": "1301",
          "name": "machine inner chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ltXYoVAu--JZgs",
          "id": "0624",
          "name": "march sit (wall)",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5Kos6RdMMFWQRv",
          "id": "1353",
          "name": "medicine ball catch and overhead throw",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bd8ukUyLeyL4rY",
          "id": "1302",
          "name": "medicine ball chest pass",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0XG1eTmTJ9IKfg",
          "id": "1303",
          "name": "medicine ball chest push from 3 point stance",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4V40G-NjYzKopd",
          "id": "1304",
          "name": "medicine ball chest push multiple response",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4CKPcZTcCQCQ23",
          "id": "1305",
          "name": "medicine ball chest push single response",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/12r8b8zN8UiMis",
          "id": "1312",
          "name": "medicine ball chest push with run release",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JVC9W7Cfpf7BME",
          "id": "1701",
          "name": "medicine ball close grip push up",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cLQVVtJa7EsHDH",
          "id": "1354",
          "name": "medicine ball overhead slam",
          "target": "upper back"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M2kKBX-yqw17xt",
          "id": "1750",
          "name": "medicine ball supine chest throw",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PQMjmth2PABaNx",
          "id": "0627",
          "name": "mixed grip chin-up",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NyroXxKwtT0bti",
          "id": "3217",
          "name": "modified hindu push-up (male)",
          "target": "pectorals"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0bchceZWAQskYi",
          "id": "1421",
          "name": "modified push up to lower arms",
          "target": "forearms"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/e4qveuFyRlonJ1",
          "id": "0628",
          "name": "monster walk",
          "target": "glutes"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AWmhRb4FvAgiHI",
          "id": "0630",
          "name": "mountain climber",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/S85tMmM0cS3ols",
          "id": "0631",
          "name": "muscle up",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/F9G0BdfbZ15L2s",
          "id": "1401",
          "name": "muscle-up (on vertical bar)",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UwkPYmF-4zaCNM",
          "id": "2328",
          "name": "narrow push-up on exercise ball",
          "target": "triceps"
        },
        {
          "bodyPart": "neck",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9WHNntudpz9y0q",
          "id": "1403",
          "name": "neck side stretch",
          "target": "levator scapulae"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yxzM5iNBbuhhsO",
          "id": "0634",
          "name": "negative crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/e25zurkiyQj2ou",
          "id": "1495",
          "name": "oblique crunch v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Sy5h4tQutFVBWd",
          "id": "0635",
          "name": "oblique crunches floor",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "olympic barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/I8K8TA33lU573p",
          "id": "0636",
          "name": "olympic barbell hammer curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "olympic barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IF-GyivXYGlOSo",
          "id": "0637",
          "name": "olympic barbell triceps extension",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TgavwV0OmKafJM",
          "id": "1355",
          "name": "one arm against wall",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/INVumqlm2tMh9K",
          "id": "0638",
          "name": "one arm chin-up",
          "target": "lats"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2vDb0y8JoXjQ8K",
          "id": "0639",
          "name": "one arm dip",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zpfsYy-UrwNFd4",
          "id": "0640",
          "name": "one arm slam (with medicine ball)",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nVQaVNt1496bzY",
          "id": "1773",
          "name": "one arm towel row",
          "target": "upper back"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0wGnOd1CtGuUX4",
          "id": "1386",
          "name": "one leg donkey calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GgsOBtNre15jOD",
          "id": "1387",
          "name": "one leg floor calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gDyPHTCzlQhPq4",
          "id": "1476",
          "name": "one leg squat",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Hro6901vepNytX",
          "id": "0641",
          "name": "otis up",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sgnkMYvRT4Ydbw",
          "id": "0642",
          "name": "outside leg kick push-up",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5JfX9bE56UKV7I",
          "id": "0643",
          "name": "overhead triceps stretch",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/I3hRrGDNpuCxln",
          "id": "3147",
          "name": "pelvic tilt",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8OQGJLqQ-AD1vC",
          "id": "1422",
          "name": "pelvic tilt into bridge",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ybxmi-uOME1UJF",
          "id": "1388",
          "name": "peroneals stretch",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/m1aLFOr-tu49d7",
          "id": "3662",
          "name": "pike-to-cobra push-up",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tyRPkPVodGm9Uw",
          "id": "1306",
          "name": "plyo push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ohfhuJ9fobh74y",
          "id": "1687",
          "name": "posterior step to overhead reach",
          "target": "abs"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pmx7n4eIaPXIJ8",
          "id": "1389",
          "name": "posterior tibialis stretch",
          "target": "calves"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/YXwc0EdwiStmg-",
          "id": "3119",
          "name": "potty squat",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TzNN52OpOJA5CQ",
          "id": "3132",
          "name": "potty squat with support",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oQ-VHEzPfTQSMq",
          "id": "0648",
          "name": "power clean",
          "target": "hamstrings"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rI9QGDaehiF-ms",
          "id": "3665",
          "name": "power point plank",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hFhXyciDptQQr4",
          "id": "3203",
          "name": "prisoner half sit-up (male)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FkflgptHfl0VO5",
          "id": "1707",
          "name": "prone twist on stability ball",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TADvDw6ZkUJuZa",
          "id": "0651",
          "name": "pull up (neutral grip)",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-uetX8Po5Lq1Zo",
          "id": "0650",
          "name": "pull-in (on stability ball)",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mwtFh33RaNv-V9",
          "id": "0652",
          "name": "pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3p1CEeKupwNyxV",
          "id": "1689",
          "name": "push and pull bodyweight",
          "target": "pectorals"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nCN99HfpjGmoPc",
          "id": "3638",
          "name": "push to run",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "chest",
          "equipment": "bosu ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/fvXd6zlxUfhCoq",
          "id": "1307",
          "name": "push up on bosu ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CHv8T6tS7xv0pk",
          "id": "0662",
          "name": "push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "bosu ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/L32xbHgzoaticU",
          "id": "0653",
          "name": "push-up (bosu ball)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uLd4iXJM0RVq6D",
          "id": "0655",
          "name": "push-up (on stability ball)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Eiy4LVWobaICLy",
          "id": "0656",
          "name": "push-up (on stability ball)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KWBtRSKykyGpFI",
          "id": "0659",
          "name": "push-up (wall)",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rdeIxBqOzLMfHT",
          "id": "0658",
          "name": "push-up (wall) v. 2",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9COh-nlNhuEARv",
          "id": "0660",
          "name": "push-up close-grip off dumbbell",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jZ94UHumxKqZZZ",
          "id": "0661",
          "name": "push-up inside leg kick",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rdtHXiXYqB4f7R",
          "id": "0663",
          "name": "push-up medicine ball",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CDdXMtaiOLBPl-",
          "id": "1467",
          "name": "push-up on lower arms",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LLtmrEncoGzDOu",
          "id": "3145",
          "name": "push-up plus",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OpHGYfGQiPqByl",
          "id": "0664",
          "name": "push-up to side plank",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/J5WgJoJTey72Ws",
          "id": "3533",
          "name": "quads",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IfMBawcSnD-u24",
          "id": "3201",
          "name": "quarter sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zNuPy6EYWo0S7s",
          "id": "3552",
          "name": "quick feet v. 2",
          "target": "quads"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wUdaK3Lj3onBWX",
          "id": "0666",
          "name": "raise single arm push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zbHoodJ3qR-tzB",
          "id": "0668",
          "name": "rear decline bridge",
          "target": "glutes"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/eGNK1EQvP6qwkT",
          "id": "0669",
          "name": "rear deltoid stretch",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5r09lQQDomTsK2",
          "id": "0670",
          "name": "rear pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/l-DWDJD4s6CGsd",
          "id": "1582",
          "name": "reclining big toe pose with rope",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/AAUuSDKu1yfVDD",
          "id": "3236",
          "name": "resistance band hip thrusts on knees (female)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ErSWwB4xBADXAD",
          "id": "3007",
          "name": "resistance band leg extension",
          "target": "quads"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/P2WD9mCx-KqcM9",
          "id": "3123",
          "name": "resistance band seated biceps curl",
          "target": "biceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3e6Fj-cGQkj4XJ",
          "id": "3124",
          "name": "resistance band seated chest press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NiYMkJzHDsRlh1",
          "id": "3006",
          "name": "resistance band seated hip abduction",
          "target": "abductors"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9rpxREwgXZIqLe",
          "id": "3122",
          "name": "resistance band seated shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "resistance band",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-P25Fqo1iDwryL",
          "id": "3144",
          "name": "resistance band seated straight back row",
          "target": "upper back"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oj4YlbSDciLGUz",
          "id": "0872",
          "name": "reverse crunch",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/bTJS6AVJBae9wj",
          "id": "0672",
          "name": "reverse dip",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M8fdUdPPbcewFQ",
          "id": "0673",
          "name": "reverse grip machine lat pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CQ-iZn7iCLyJRB",
          "id": "0674",
          "name": "reverse grip pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cZwvn-3Jf4pY-P",
          "id": "0675",
          "name": "reverse hyper extension (on stability ball)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/CqKBnYrIQJpSZ6",
          "id": "1423",
          "name": "reverse hyper on flat bench",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/M740PietjUFeIM",
          "id": "3663",
          "name": "reverse plank with leg lift",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/E0bZMuqiUSahTU",
          "id": "0677",
          "name": "ring dips",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2XLgHAdv9r7oMV",
          "id": "2571",
          "name": "rocking frog stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/95UMVyzz-XLjhz",
          "id": "0678",
          "name": "rocky pull-up pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-YzMriyOqMhpD4",
          "id": "2208",
          "name": "roller back stretch",
          "target": "spine"
        },
        {
          "bodyPart": "waist",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vG68ongJxE4IoF",
          "id": "2204",
          "name": "roller body saw",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sRW3XU7l2zsRQW",
          "id": "2205",
          "name": "roller hip lat stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xZhZUBVo4xfYEz",
          "id": "2202",
          "name": "roller hip stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/k35ytHJh161IDh",
          "id": "2206",
          "name": "roller reverse crunch",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kfKBChmScAfijE",
          "id": "2203",
          "name": "roller seated shoulder flexor depresor retractor",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PsOvU2KExRKuyj",
          "id": "2209",
          "name": "roller seated single leg shoulder flexor depresor retractor",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/n9MwVMiQ6JMAYw",
          "id": "2207",
          "name": "roller side lat stretch",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/J2D8ocRvqqgwM4",
          "id": "0680",
          "name": "rope climb",
          "target": "upper back"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sfQuBGcMPXn6eU",
          "id": "0685",
          "name": "run",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6jgeUMyyCuWUq6",
          "id": "0684",
          "name": "run (equipment)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FeS9pQaBv6xUgu",
          "id": "1585",
          "name": "runners stretch",
          "target": "hamstrings"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9n5XW50g42NHJS",
          "id": "0687",
          "name": "russian twist",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HaNgHhsLGKnVjp",
          "id": "3012",
          "name": "scapula dips",
          "target": "traps"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ubzczsSOst-kZf",
          "id": "3021",
          "name": "scapula push-up",
          "target": "serratus anterior"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Wr9VcOwiXZgGNg",
          "id": "0688",
          "name": "scapular pull-up",
          "target": "traps"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/n-jUEGnbUb7qQm",
          "id": "3219",
          "name": "scissor jumps (male)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RKS8Cpe2bDdBZn",
          "id": "1390",
          "name": "seated calf stretch (male)",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/l3mAlT-H8lKulf",
          "id": "1424",
          "name": "seated glute stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WBgPuVE5Ld1rot",
          "id": "0689",
          "name": "seated leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cNOiY29uSnIJmf",
          "id": "0690",
          "name": "seated lower back stretch",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KOWRy3ngpE5l-o",
          "id": "2567",
          "name": "seated piriformis stretch",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GkQmFeR9Qiiy1Y",
          "id": "0691",
          "name": "seated side crunch (wall)",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HGkBO50sDLYfbj",
          "id": "1587",
          "name": "seated wide angle pose sequence",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/TPXg9GY2LWJLf3",
          "id": "0697",
          "name": "self assisted inverse leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x7T0NR-UGkCfz0",
          "id": "1766",
          "name": "self assisted inverse leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NHpBDMeTVVVVyi",
          "id": "0696",
          "name": "self assisted inverse leg curl (on floor)",
          "target": "hamstrings"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4cJx9Tm6b-xkXa",
          "id": "3222",
          "name": "semi squat jump (male)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/biC2Sn0LPWskGu",
          "id": "3656",
          "name": "short stride run",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/V243IZRoOqVosF",
          "id": "1763",
          "name": "shoulder grip pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EHmdPM65swSIHd",
          "id": "3699",
          "name": "shoulder tap",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wQVDHVvWFOiZGp",
          "id": "0699",
          "name": "shoulder tap push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/J6-PX-CjdtN-gj",
          "id": "1774",
          "name": "side bridge hip abduction",
          "target": "abductors"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jp8u756WAjb9mi",
          "id": "0705",
          "name": "side bridge v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ORx-jcMM1mcMpc",
          "id": "0709",
          "name": "side hip (on parallel bars)",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/i1ofiMDlMawz31",
          "id": "0710",
          "name": "side hip abduction",
          "target": "abductors"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/mWQxr3Dmob1pXE",
          "id": "1358",
          "name": "side lying floor stretch",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uFqkAQwYZOQfir",
          "id": "3667",
          "name": "side lying hip adduction (male)",
          "target": "adductors"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LzfszOmBqWFroH",
          "id": "1775",
          "name": "side plank hip adduction",
          "target": "adductors"
        },
        {
          "bodyPart": "neck",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/e2m0qZNxhW4ZRI",
          "id": "0716",
          "name": "side push neck stretch",
          "target": "levator scapulae"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pFxhx8E01MnA8b",
          "id": "0717",
          "name": "side push-up",
          "target": "triceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gLzz-KN48QnWOl",
          "id": "0721",
          "name": "side wrist pull stretch",
          "target": "forearms"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wcrZBA7QgcyXtB",
          "id": "0720",
          "name": "side-to-side chin",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HbKAPeypyzdXel",
          "id": "3213",
          "name": "side-to-side toe touch (male)",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/calCXY5lKcvr3m",
          "id": "0725",
          "name": "single arm push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yIpG8f3cJnNHWA",
          "id": "3645",
          "name": "single leg bridge with outstretched leg",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wWhkuun9oaK8zC",
          "id": "0727",
          "name": "single leg calf raise (on a dumbbell)",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FziW4T8QX338We",
          "id": "0730",
          "name": "single leg platform slide",
          "target": "hamstrings"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PFXWbagoDzCDdR",
          "id": "1759",
          "name": "single leg squat (pistol) male",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hMwvqoF7AgNxmT",
          "id": "1489",
          "name": "sissy squat",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/T9hBQ-tePXX5rp",
          "id": "0735",
          "name": "sit-up v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/8uLyMAFPQFcWIn",
          "id": "3679",
          "name": "sit-up with arms on chest",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wEQ5cV-0IHIo9l",
          "id": "3361",
          "name": "skater hops",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "skierg machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BaMZYhJVcBGh1T",
          "id": "2142",
          "name": "ski ergometer",
          "target": "triceps"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/faQIll14Y-1OkH",
          "id": "3671",
          "name": "ski step",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/IfHbwvyHJcDOlH",
          "id": "3304",
          "name": "skin the cat",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-roioGyAZTYgO2",
          "id": "1425",
          "name": "sled 45 degrees one leg press",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ESB7qEwYqqZOyv",
          "id": "0738",
          "name": "sled 45в° calf press",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kjY1A5AbiHXWEX",
          "id": "0739",
          "name": "sled 45в° leg press",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Jl5BdJW0w0UnI7",
          "id": "1464",
          "name": "sled 45в° leg press (back pov)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ZInxTrx6w3QUAm",
          "id": "1463",
          "name": "sled 45в° leg press (side pov)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/88v3fuC9yCe2Ck",
          "id": "0740",
          "name": "sled 45в° leg wide press",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NGiDx1C4xyKRNU",
          "id": "1391",
          "name": "sled calf press on leg press",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wFDVn10MWeIVJQ",
          "id": "0741",
          "name": "sled closer hack squat",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jMOSuQRFTDI2Xk",
          "id": "0742",
          "name": "sled forward angled calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wofdmT7RX9lT9k",
          "id": "0743",
          "name": "sled hack squat",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DGnHqdlTeciBmF",
          "id": "2334",
          "name": "sled lying calf press",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zV6Uv7y9qbMwPn",
          "id": "0744",
          "name": "sled lying squat",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "sled machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/60KxCVO4CViqXW",
          "id": "1392",
          "name": "sled one leg calf press on leg press",
          "target": "calves"
        },
        {
          "bodyPart": "waist",
          "equipment": "hammer",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nk-dU88b9gXdcx",
          "id": "1496",
          "name": "sledge hammer",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6ePCPpjvrgUwri",
          "id": "0746",
          "name": "smith back shrug",
          "target": "traps"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0k9AjxiBJbfiIk",
          "id": "0747",
          "name": "smith behind neck press",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/s4shSj3UJTv5it",
          "id": "0748",
          "name": "smith bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hqQqBKFbyCodHK",
          "id": "0749",
          "name": "smith bent knee good morning",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xpO-lYphIgeooS",
          "id": "1359",
          "name": "smith bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nC4zSuHmikygKa",
          "id": "0750",
          "name": "smith chair squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qK4ViY47-UEyop",
          "id": "0751",
          "name": "smith close-grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BGKtn0fAKaGTJU",
          "id": "0752",
          "name": "smith deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/syXlWXDzdjq4CV",
          "id": "0753",
          "name": "smith decline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MeHCxk6KdWVbas",
          "id": "0754",
          "name": "smith decline reverse-grip press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/RU39HyY-bzXmNG",
          "id": "1433",
          "name": "smith front squat (clean grip)",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Ulr3zhDvW3zmVb",
          "id": "3281",
          "name": "smith full squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5aoZCcA1IU7hj9",
          "id": "0755",
          "name": "smith hack squat",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w7nMstMwHsI7zO",
          "id": "0756",
          "name": "smith hip raise",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/PrWo58sdflmjej",
          "id": "0757",
          "name": "smith incline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rRMPoHfgmA9kw0",
          "id": "0758",
          "name": "smith incline reverse-grip press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9xx7rcVRfM0-jc",
          "id": "0759",
          "name": "smith incline shoulder raises",
          "target": "serratus anterior"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zCpX-pRTrAWdk9",
          "id": "0760",
          "name": "smith leg press",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cf7pOOxaISrMDP",
          "id": "1434",
          "name": "smith low bar squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7tSdF-SMm4hpwc",
          "id": "1683",
          "name": "smith machine bicep curl",
          "target": "biceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/aSAkOCoyd8O0Wf",
          "id": "1625",
          "name": "smith machine decline close grip bench press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sVyQnsoJYlIhtV",
          "id": "1752",
          "name": "smith machine incline tricep extension",
          "target": "triceps"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jiyiswecAwXnqA",
          "id": "1626",
          "name": "smith machine reverse decline close grip bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "back",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dP3Wcdu5T6IOFO",
          "id": "0761",
          "name": "smith narrow row",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GHIATsLYi5vVqc",
          "id": "1360",
          "name": "smith one arm row",
          "target": "upper back"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nS402U7dWHSobs",
          "id": "1393",
          "name": "smith one leg floor calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uWWQHpa6-Ifkwo",
          "id": "0762",
          "name": "smith rear delt row",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Aeo9JDpzhBNUpK",
          "id": "0763",
          "name": "smith reverse calf raises",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NjHPlqAMuINYLm",
          "id": "1394",
          "name": "smith reverse calf raises",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/q1nbQYMuLVVJp9",
          "id": "1361",
          "name": "smith reverse grip bent over row",
          "target": "upper back"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/EaSFIH-GL7rJAE",
          "id": "0764",
          "name": "smith reverse-grip press",
          "target": "pectorals"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3ufCcQJN6rSCzo",
          "id": "1395",
          "name": "smith seated one leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cts-PpLU8Sdkzt",
          "id": "0765",
          "name": "smith seated shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UUBxO6LKbegQpf",
          "id": "1426",
          "name": "smith seated wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/beGJpI4P2TbDqt",
          "id": "0766",
          "name": "smith shoulder press",
          "target": "delts"
        },
        {
          "bodyPart": "back",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/pylu2FKnWT5OJ9",
          "id": "0767",
          "name": "smith shrug",
          "target": "traps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vidp7hlFbVIIFW",
          "id": "0768",
          "name": "smith single leg split squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/o79LnRg6JlnnyJ",
          "id": "0769",
          "name": "smith sprint lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JTxQB-wEMi0hf7",
          "id": "0770",
          "name": "smith squat",
          "target": "glutes"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/sCo1dpirAsJA2q",
          "id": "0771",
          "name": "smith standing back wrist curl",
          "target": "forearms"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7EsQ0O8k9twXY4",
          "id": "0772",
          "name": "smith standing behind head military press",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/66T5oBFvUbfgn4",
          "id": "0773",
          "name": "smith standing leg calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kpPAxEezRjpwju",
          "id": "0774",
          "name": "smith standing military press",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gy01OVWRL7myQQ",
          "id": "3142",
          "name": "smith sumo squat",
          "target": "glutes"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BKzu3TUD0EP44y",
          "id": "1396",
          "name": "smith toe raise",
          "target": "calves"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/svkX3SMzVRf4F7",
          "id": "0775",
          "name": "smith upright row",
          "target": "delts"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/78pL5z--uNmNpE",
          "id": "1308",
          "name": "smith wide grip bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "smith machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2beYxW515y4HQI",
          "id": "1309",
          "name": "smith wide grip decline bench press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QxT9iUOoGWBEJ0",
          "id": "0776",
          "name": "snatch pull",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "dumbbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2rdPXJ3gE-kVcx",
          "id": "0777",
          "name": "spell caster",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yrKPQxlx99lxZY",
          "id": "1362",
          "name": "sphinx",
          "target": "spine"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dVQ8feCB4KsOgF",
          "id": "0778",
          "name": "spider crawl push up",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9ag5jGVPV5PrmZ",
          "id": "1363",
          "name": "spine stretch",
          "target": "spine"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6-5IZjUITYafMn",
          "id": "2329",
          "name": "spine twist",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gqTfP2Kenv41jI",
          "id": "2368",
          "name": "split squats",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VG-LHehT6-dHxE",
          "id": "0786",
          "name": "squat jerk",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "bosu ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Z9IKs9bJ4A0myA",
          "id": "1705",
          "name": "squat on bosu ball",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oZtxpWNDKFD1t3",
          "id": "1685",
          "name": "squat to overhead reach",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/MEwIsIipsfED1M",
          "id": "1686",
          "name": "squat to overhead reach with twist",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "stability ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OCxMs1LofC-D3K",
          "id": "2297",
          "name": "stability ball crunch (full range hands behind head)",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/kgI5PVlsI5pPFH",
          "id": "3291",
          "name": "stalder press",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JADGcBfQNIDYTh",
          "id": "3669",
          "name": "standing archer",
          "target": "upper back"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "barbell",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VJ6hxgZCYubZVt",
          "id": "0788",
          "name": "standing behind neck press",
          "target": "delts"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KYjnv3Qx3i90II",
          "id": "1490",
          "name": "standing calf raise (on a staircase)",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/gP4ImHdAG2wa53",
          "id": "1397",
          "name": "standing calves",
          "target": "calves"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/y27-O5srIJ98GG",
          "id": "1398",
          "name": "standing calves calf stretch",
          "target": "calves"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "rope",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/x-LyU0wJJK0oCp",
          "id": "1599",
          "name": "standing hamstring and calf stretch with strap",
          "target": "hamstrings"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/GG3FLh1iYvEwH-",
          "id": "0794",
          "name": "standing lateral stretch",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3gaUEaHfWZeHIG",
          "id": "1364",
          "name": "standing pelvic tilt",
          "target": "spine"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UReUiYzrzSf8yV",
          "id": "0795",
          "name": "standing single leg curl",
          "target": "hamstrings"
        },
        {
          "bodyPart": "waist",
          "equipment": "wheel roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/f3Jw8IEkmc5LkD",
          "id": "0796",
          "name": "standing wheel rollerout",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7IHZIGdoAOjL2H",
          "id": "3223",
          "name": "star jump (male)",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "stationary bike",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FlBQmDERSPfA5I",
          "id": "2138",
          "name": "stationary bike run v. 3",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HWgHbo6wNm477y",
          "id": "0798",
          "name": "stationary bike walk",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/asgrRkfrJ5sAoz",
          "id": "3314",
          "name": "straddle maltese",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/LLibkkFH3EwDr-",
          "id": "3298",
          "name": "straddle planche",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3g1W0NaeJmjSin",
          "id": "1427",
          "name": "straight leg outer hip abductor",
          "target": "abductors"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/OSiezEF7LrpldT",
          "id": "0803",
          "name": "superman push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/w2P3p9uxfZZzkR",
          "id": "0805",
          "name": "suspended abdominal fallout",
          "target": "abs"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/9sls9hFSKoYN13",
          "id": "0806",
          "name": "suspended push-up",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2n1Od6gTzIxElS",
          "id": "0807",
          "name": "suspended reverse crunch",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hhqXNTvKb-pbYD",
          "id": "0808",
          "name": "suspended row",
          "target": "upper back"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iPy6o0dDOFwUsq",
          "id": "0809",
          "name": "suspended split squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NGVuYGyl94-wCX",
          "id": "3433",
          "name": "swimmer kicks v. 2 (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cX3xLlVm8pofrj",
          "id": "3318",
          "name": "swing 360",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1FyZf6yuehT9wR",
          "id": "1753",
          "name": "three bench dip",
          "target": "triceps"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "tire",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dk3r7wjeaLywEQ",
          "id": "2459",
          "name": "tire flip",
          "target": "glutes"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "trap bar",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3XFKp2NYVqcIuu",
          "id": "0811",
          "name": "trap bar deadlift",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/hUFBwaNM4kcUWe",
          "id": "0814",
          "name": "triceps dip",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ogfzVk-4aload7",
          "id": "0812",
          "name": "triceps dip (bench leg)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0GVQMFA-ZZmu3z",
          "id": "0813",
          "name": "triceps dip (between benches)",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/D4-F7jQtEmjQd0",
          "id": "0815",
          "name": "triceps dips floor",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7QbEFWE8u9-5O5",
          "id": "0816",
          "name": "triceps press",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QXsxjl1x7lVcgx",
          "id": "0817",
          "name": "triceps stretch",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/yoo2e5jpYqa2jI",
          "id": "0871",
          "name": "tuck crunch",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/QECj4BQh1wzghT",
          "id": "0818",
          "name": "twin handle parallel grip lat pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vg59dAavzmY7Oa",
          "id": "1466",
          "name": "twist hip lift",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VNdcTtSPe7cUEb",
          "id": "2802",
          "name": "twisted leg raise",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/ugw7QVo1-tN32a",
          "id": "2801",
          "name": "twisted leg raise (female)",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Gv-hq8hB1ilazO",
          "id": "3231",
          "name": "two toe touch (male)",
          "target": "spine"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/cEWuugIVDH2iHa",
          "id": "1365",
          "name": "upper back stretch",
          "target": "upper back"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/25nbuP3fPIt8cC",
          "id": "1366",
          "name": "upward facing dog",
          "target": "spine"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/umrDomqYRK1s-M",
          "id": "3420",
          "name": "v-sit on floor",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/L9LSjCVLdpv9TN",
          "id": "0826",
          "name": "vertical leg raise (on parallel bars)",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "elliptical machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/BmABNNLPaveTNu",
          "id": "2141",
          "name": "walk elliptical cross trainer",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rzwfEnm6-kLH9w",
          "id": "3655",
          "name": "walking high knees lunge",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/f7j4nnuJm2qvxO",
          "id": "1460",
          "name": "walking lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "cardio",
          "equipment": "leverage machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/WWRuCSObU2kmw2",
          "id": "3666",
          "name": "walking on incline treadmill",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "cardio",
          "equipment": "stepmill machine",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/dgZpsbuqKC3gH3",
          "id": "2311",
          "name": "walking on stepmill",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5wZDcPFMdAudLI",
          "id": "0830",
          "name": "weighted bench dip",
          "target": "triceps"
        },
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4KF5X2ymeRi-8j",
          "id": "2987",
          "name": "weighted close grip chin-up on dip cage",
          "target": "lats"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/xjywVK8fsTVfQv",
          "id": "3643",
          "name": "weighted cossack squats (male)",
          "target": "glutes"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/-hTUBCs5y-PwAC",
          "id": "0832",
          "name": "weighted crunch",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iGGEM2jVNLrBaQ",
          "id": "3670",
          "name": "weighted decline sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/2Ftg4RD6efXFYy",
          "id": "0833",
          "name": "weighted donkey calf raise",
          "target": "calves"
        },
        {
          "bodyPart": "chest",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/UPtRyps-rb-YxP",
          "id": "1310",
          "name": "weighted drop push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qLhL7ujoqEzadX",
          "id": "2135",
          "name": "weighted front plank",
          "target": "abs"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/7R-wTFtk18CbCp",
          "id": "0834",
          "name": "weighted front raise",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/JQlNksX7YzBKjC",
          "id": "0866",
          "name": "weighted hanging leg-hip raise",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/zyhishTxl38kjl",
          "id": "0835",
          "name": "weighted hyperextension (on stability ball)",
          "target": "spine"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/f3ABEjPwtT1kJO",
          "id": "3641",
          "name": "weighted kneeling step with swing",
          "target": "delts"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iM1oUBoYKmw3S7",
          "id": "3644",
          "name": "weighted lunge with swing",
          "target": "glutes"
        },
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rD-G85735P624b",
          "id": "3286",
          "name": "weighted muscle up",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Pgu5y0S-IBtz3p",
          "id": "3312",
          "name": "weighted muscle up (on bar)",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/r5rje-IL6VWdmW",
          "id": "3290",
          "name": "weighted one hand pull up",
          "target": "lats"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/HKHf3MjagL8lIK",
          "id": "0840",
          "name": "weighted overhead crunch (on stability ball)",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/seVGNnSQxuHLb1",
          "id": "0841",
          "name": "weighted pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "shoulders",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/jCbKo3rSLnDUh6",
          "id": "0844",
          "name": "weighted round arm",
          "target": "delts"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/6Xe0ueWPDLLb1I",
          "id": "0846",
          "name": "weighted russian twist",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Q-h45H6lwZOfVR",
          "id": "0845",
          "name": "weighted russian twist (legs up)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/I8zka5wMUd0BDD",
          "id": "2371",
          "name": "weighted russian twist v. 2",
          "target": "abs"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "medicine ball",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/vHsL5Alhs14hwg",
          "id": "0847",
          "name": "weighted seated bicep curl  (on stability ball)",
          "target": "biceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/nQN8dHq19hdDma",
          "id": "0849",
          "name": "weighted seated twist (on stability ball)",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VrVc2nRB4OuEtR",
          "id": "0850",
          "name": "weighted side bend (on stability ball)",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/oi6DCac8AU-ZNz",
          "id": "0851",
          "name": "weighted sissy squat",
          "target": "quads"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/NUxBQfwfYrhBN0",
          "id": "0852",
          "name": "weighted squat",
          "target": "glutes"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/DQLvtojD0oJEBf",
          "id": "0853",
          "name": "weighted standing curl",
          "target": "biceps"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/rsEUiHSPu1v4EX",
          "id": "0854",
          "name": "weighted standing hand squeeze",
          "target": "forearms"
        },
        {
          "bodyPart": "chest",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/FGUqUGeThXQtYB",
          "id": "3313",
          "name": "weighted straight bar dip",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/uU5udzNGlIU0Vj",
          "id": "3642",
          "name": "weighted stretch lunge",
          "target": "glutes"
        },
        {
          "bodyPart": "chest",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/KSrxNUvRKMusDs",
          "id": "0856",
          "name": "weighted svend press",
          "target": "pectorals"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/iaYaMKL5dtVMUz",
          "id": "1754",
          "name": "weighted three bench dips",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Fz1M-Vqj0Ud0XI",
          "id": "1755",
          "name": "weighted tricep dips",
          "target": "triceps"
        },
        {
          "bodyPart": "upper arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/3ru68yUsZ2MyPf",
          "id": "1767",
          "name": "weighted triceps dip on high parallel bars",
          "target": "triceps"
        },
        {
          "bodyPart": "waist",
          "equipment": "wheel roller",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/VDc1gNgI3jzw0O",
          "id": "0857",
          "name": "wheel rollerout",
          "target": "abs"
        },
        {
          "bodyPart": "cardio",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/4Ekbe3yACXFU1h",
          "id": "3637",
          "name": "wheel run",
          "target": "cardiovascular system"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/Zwz8xQu9y24kmO",
          "id": "1429",
          "name": "wide grip pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/lAz3QA1WG5lSoL",
          "id": "1367",
          "name": "wide grip rear pull-up",
          "target": "lats"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/5O9KP7J3yezIpE",
          "id": "1311",
          "name": "wide hand push up",
          "target": "pectorals"
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/tvG3z3RkKgccy6",
          "id": "2363",
          "name": "wide-grip chest dip on high parallel bars",
          "target": "pectorals"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/a7UC3rEZH3FI5C",
          "id": "0858",
          "name": "wind sprints",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/qxsIkNGqONZT4A",
          "id": "1604",
          "name": "world greatest stretch",
          "target": "hamstrings"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/W7eC24dtN6V91o",
          "id": "1428",
          "name": "wrist circles",
          "target": "forearms"
        },
        {
          "bodyPart": "lower arms",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/1OedRP3iv4GjZW",
          "id": "0859",
          "name": "wrist rollerer",
          "target": "forearms"
        }
      ]);
  
    process.exit();
  })();