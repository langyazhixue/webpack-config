{
  "dataList": [
    {
    "calNum": true,
    "sentence": "您好，（停顿2S）你好！我是杭州 同花顺（同花顺读清楚点）的客户经理，现在有个免费的股票咨询服务 想邀请我们的内部客户一起参与。主要呢，是为了庆祝公司成立10周年。您看 是否有兴趣了解一下？",
    "answer_keyword_def": {
      "肯定": ["需要", "ok", "^((?!没有需要).)*有需要", "^[^没]*需求", "^[^(不|没)]*兴趣", "^[^不]*可以", "(正|刚好).*(好|要|准备|打算|需要|想)", "(请|接着|继续|你)(说|讲|.*介绍)", "安排", "不错", "参加", "大概清楚", "当然", "(对|嗯|恩|好|行|可以|是|有|能)(啊|的|对|你说|是|吧|可以|行|你说|你讲)", "(给|跟)我(说|讲)", "还(不错|行|可以)", "方便", "感兴趣", "刚好", "^(对|好|行|可以|是|有|能)$", "行.*了解下", "(加|讲|介绍|说)(下|一下|吧)", "可以", "可以(.*了解|啊|参加|的|考虑|了解|去)", "^[^(木|没)]*(需求|需要|兴趣|想法|打算|用|时间|必要|接触|考虑)", "肯定", "了解", "理解下", "没问题", "你(.*介绍|继续|.*说|.*讲|加|弄)", "是(我|这个)", "确实是", "同意"],
      "拒绝": ["(没|不).*考虑", "没.*兴趣", "不.*感兴趣", "(没|不).*需要", "没.*想法", "不.*想要", "没.*打算", "没.*需求", "(唉|哎|啊|哦|嗯|谢谢).*(不需要|不用|不考虑|谢谢|拜拜|挂了|再见)", "不(必|感兴趣|行|好|加|考虑|可以|了|了解|买|去|是|喜欢|需要|要|要再打电话|用|用介绍|愿意|知道|做)", "不想(.*了解|了解|说|要|用|知道|做)", "不想", "打错", "(木|没|木有|没有).*(需求|需要|兴趣|想法|打算|用|必要|接触|考虑)", "烦不烦", "搞错", "算了", "听不懂人话", "我说(我不|我没)", "先这样", "(现在|目前).*(不要|不需要|不用|不急|不着急|不紧张|没有)", "一天到晚打", "已经.*(有|过|买)", "用不(到|着)", "暂时", "暂时.*(没|不要|不需要|不考虑|用|不用)", "暂时不"],
      "未识别": [],
      "否定": ["不知道", "^((?!听不清楚|说不清楚).)*不清楚", "不了解", "^没有$", "(不|没|没有)(兴趣|打算|想法|需要|打算|考虑)", "(木|没|木有|没有).*(需求|需要|兴趣|想法|打算|用)", "(不|木)(知道|要|想|好|同意|清楚|晓得|愿意|用|行|去|好|感兴趣|考虑|需要|打算)"]
    },
    "sentence_record_url": "https://aicc-cdn.zhexinit.com/robot-audio/176912690072117262/193478342426277471/1b6eff8933b1.wav",
    "speakType": 1,
    "client_intent": ["未识别", "肯定", "否定", "拒绝"],
    "question_list": {
      "肯定": ["好的", "没问题", "我有兴趣", "我同意", "嗯"],
      "拒绝": ["不考虑", "没兴趣", "我不同意", "没想法"],
      "未识别": [],
      "否定": ["不知道", "不了解"]
    },
    "all_client_intent": [{
      "patentId": "fd28fc40-5cd2-11e9-ab99-19d80eb14e40",
      "name": "肯定",
      "checked": true,
      "id": "079ff890-5cd3-11e9-ab99-19d80eb14e40"
    }, {
      "patentId": "fd28fc40-5cd2-11e9-ab99-19d80eb14e40",
      "name": "否定",
      "checked": true,
      "id": "079ff891-5cd3-11e9-ab99-19d80eb14e40"
    }, {
      "patentId": "fd28fc40-5cd2-11e9-ab99-19d80eb14e40",
      "name": "拒绝",
      "checked": true,
      "id": "079ff892-5cd3-11e9-ab99-19d80eb14e40"
    }, {
      "patentId": "fd28fc40-5cd2-11e9-ab99-19d80eb14e40",
      "name": "未识别",
      "checked": true,
      "id": "079ff893-5cd3-11e9-ab99-19d80eb14e40"
    }],
    "is_transfer": 0,
    "type": 1,
    "multipleCalNum": true,
    "sentence_cut": [{
      "speech_rec_cut_id": "15703616192178774917",
      "sentence_text_url": "https://aicc-cdn.zhexinit.com/robot-audio/176912690072117262/193478342426277471/1b6eff8933b1.wav",
      "sentence_record_path": "/robot-audio/176912690072117262/193478342426277471/1b6eff8933b1.wav",
      "sen_rec_name": "1-开头语，您好.wav",
      "sentence_text": "您好，（停顿2S）你好！我是杭州 同花顺（同花顺读清楚点）的客户经理，现在有个免费的股票咨询服务 想邀请我们的内部客户一起参与。主要呢，是为了庆祝公司成立10周年。您看 是否有兴趣了解一下？",
      "type": "record"
    }],
    "intent_tag_def": {
      "肯定": {
        "tag_list": [],
        "intent_code": ""
      },
      "拒绝": {
        "tag_list": [],
        "intent_code": ""
      },
      "自定义": {
        "tag_list": [],
        "intent_code": "A"
      },
      "未识别": {
        "tag_list": [],
        "intent_code": ""
      },
      "否定": {
        "tag_list": [],
        "intent_code": ""
      }
    },
    "sms_id": "",
    "sentence_record_name": "1-开头语，您好.wav",
    "top": 37,
    "left": 399,
    "node_repetition_repeate": 1,
    "sentence_repetition_cut": [{
      "answer": "辅助话术001",
      "speech_rec_sen_cut_vos": [{
        "speech_rec_cut_id": "81d1e8c1-b2ab-11e9-89e8-49be682f330d",
        "sentence_text_url": "https://zhexin-ai.oss-cn-hangzhou.aliyuncs.com/robot-audio/207382706342150384/207382706342150381/bd3f8a72f471.wav",
        "sentence_record_path": "/robot-audio/207382706342150384/207382706342150381/bd3f8a72f471.wav",
        "sen_rec_name": "开场白.wav",
        "sentence_text": "辅助话术001",
        "type": "record"
      }],
      "id": "74920870-b2ab-11e9-89e8-49be682f330d"
    }, {
      "answer": "辅助话术002",
      "speech_rec_sen_cut_vos": [{
        "speech_rec_cut_id": "81d1e8c2-b2ab-11e9-89e8-49be682f330d",
        "sentence_text_url": "https://zhexin-ai.oss-cn-hangzhou.aliyuncs.com/robot-audio/207382706342150384/207382706342150381/e9757922ee2b.wav",
        "sentence_record_path": "/robot-audio/207382706342150384/207382706342150381/e9757922ee2b.wav",
        "sen_rec_name": "肯定.wav",
        "sentence_text": "辅助话术002",
        "type": "record"
      }],
      "id": "7958df50-b2ab-11e9-89e8-49be682f330d"
    }, {
      "answer": "辅助话术003",
      "speech_rec_sen_cut_vos": [{
        "speech_rec_cut_id": "81d1e8c3-b2ab-11e9-89e8-49be682f330d",
        "sentence_text_url": "https://zhexin-ai.oss-cn-hangzhou.aliyuncs.com/robot-audio/207382706342150384/207382706342150381/9fc6f2a091b1.wav",
        "sentence_record_path": "/robot-audio/207382706342150384/207382706342150381/9fc6f2a091b1.wav",
        "sen_rec_name": "您的还款金额是不是2.wav",
        "sentence_text": "辅助话术003",
        "type": "record"
      }],
      "id": "7cbd6710-b2ab-11e9-89e8-49be682f330d"
    }],
    "name": "普通节点",
    "can_be_interrupted": 1,
    "id": "fd28fc40-5cd2-11e9-ab99-19d80eb14e40",
    "node_repetition": 2,
    "node_repetition_count": 2
  }, {
    "calNum": true,
    "sentence": "是这样的，本次活动是纯免费的，也只有我们同花顺的内部客户才能参与。分析老师会在微信上为您提供分析建议，不会耽误您什么时间。对股票有兴趣的话，还是建议您参与一下，您看如何？",
    "answer_keyword_def": {
      "肯定": ["需要", "ok", "^((?!没有需要).)*有需要", "^[^没]*需求", "^[^(不|没)]*兴趣", "^[^不]*可以", "(正|刚好).*(好|要|准备|打算|需要|想)", "(请|接着|继续|你)(说|讲|.*介绍)", "安排", "不错", "参加", "大概清楚", "当然", "(对|嗯|恩|好|行|可以|是|有|能)(啊|的|对|你说|是|吧|可以|行|你说|你讲)", "(给|跟)我(说|讲)", "还(不错|行|可以)", "方便", "感兴趣", "刚好", "^(对|好|行|可以|是|有|能)$", "行.*了解下", "(加|讲|介绍|说)(下|一下|吧)", "可以", "可以(.*了解|啊|参加|的|考虑|了解|去)", "^[^(木|没)]*(需求|需要|兴趣|想法|打算|用|时间|必要|接触|考虑)", "肯定", "了解", "理解下", "没问题", "你(.*介绍|继续|.*说|.*讲|加|弄)", "是(我|这个)", "确实是", "同意"],
      "拒绝": ["(没|不).*考虑", "没.*兴趣", "不.*感兴趣", "(没|不).*需要", "没.*想法", "不.*想要", "没.*打算", "没.*需求", "(唉|哎|啊|哦|嗯|谢谢).*(不需要|不用|不考虑|谢谢|拜拜|挂了|再见)", "不(必|感兴趣|行|好|加|考虑|可以|了|了解|买|去|是|喜欢|需要|要|要再打电话|用|用介绍|愿意|知道|做)", "不想(.*了解|了解|说|要|用|知道|做)", "不想", "打错", "(木|没|木有|没有).*(需求|需要|兴趣|想法|打算|用|必要|接触|考虑)", "烦不烦", "搞错", "算了", "听不懂人话", "我说(我不|我没)", "先这样", "(现在|目前).*(不要|不需要|不用|不急|不着急|不紧张|没有)", "一天到晚打", "已经.*(有|过|买)", "用不(到|着)", "暂时", "暂时.*(没|不要|不需要|不考虑|用|不用)", "暂时不"],
      "未识别": [],
      "否定": ["不知道", "^((?!听不清楚|说不清楚).)*不清楚", "不了解", "^没有$", "(不|没|没有)(兴趣|打算|想法|需要|打算|考虑)", "(木|没|木有|没有).*(需求|需要|兴趣|想法|打算|用)", "(不|木)(知道|要|想|好|同意|清楚|晓得|愿意|用|行|去|好|感兴趣|考虑|需要|打算)"]
    },
    "sentence_record_url": "https://aicc-cdn.zhexinit.com/robot-audio/176912690072117262/193478342426277471/e5ef1ea9d9bb.wav",
    "speakType": 1,
    "client_intent": ["未识别", "肯定", "否定", "拒绝"],
    "question_list": {
      "肯定": ["好的", "没问题", "我有兴趣", "我同意"],
      "拒绝": ["不考虑", "没兴趣", "我不同意", "没想法"],
      "未识别": [],
      "否定": ["不知道", "不了解"]
    },
    "all_client_intent": [{
      "patentId": "38173290-5cd3-11e9-ab99-19d80eb14e40",
      "name": "肯定",
      "checked": true,
      "id": "3c016510-5cd3-11e9-ab99-19d80eb14e40"
    }, {
      "patentId": "38173290-5cd3-11e9-ab99-19d80eb14e40",
      "name": "否定",
      "checked": true,
      "id": "3c016511-5cd3-11e9-ab99-19d80eb14e40"
    }, {
      "patentId": "38173290-5cd3-11e9-ab99-19d80eb14e40",
      "name": "拒绝",
      "checked": true,
      "id": "3c016512-5cd3-11e9-ab99-19d80eb14e40"
    }, {
      "patentId": "38173290-5cd3-11e9-ab99-19d80eb14e40",
      "name": "未识别",
      "checked": true,
      "id": "3c016513-5cd3-11e9-ab99-19d80eb14e40"
    }],
    "is_transfer": 0,
    "type": 1,
    "multipleCalNum": true,
    "sentence_cut": [{
      "speech_rec_cut_id": "99661900909019646492",
      "sentence_text_url": "https://aicc-cdn.zhexinit.com/robot-audio/207382706342150384/207382706342150381/b3757b3afb05.wav",
      "sentence_record_path": "/robot-audio/207382706342150384/207382706342150381/b3757b3afb05.wav",
      "sen_rec_name": "开场白.wav",
      "sentence_text": "是这样的，本次活动是纯免费的，也只有我们同花顺的内部客户才能参与。分析老师会在微信上为您提供分析建议，不会耽误您什么时间。对股票有兴趣的话，还是建议您参与一下，您看如何？",
      "type": "record"
    }],
    "intent_tag_def": {
      "肯定": {
        "tag_list": [],
        "intent_code": ""
      },
      "拒绝": {
        "tag_list": [],
        "intent_code": ""
      },
      "未识别": {
        "tag_list": [],
        "intent_code": ""
      },
      "否定": {
        "tag_list": [],
        "intent_code": ""
      }
    },
    "sms_id": "",
    "sentence_record_name": "2-是这样的，本次活动免费.wav",
    "top": 388,
    "left": 464,
    "node_repetition_repeate": 0,
    "name": "普通节点",
    "can_be_interrupted": 1,
    "id": "38173290-5cd3-11e9-ab99-19d80eb14e40",
    "node_repetition": 0,
    "node_repetition_count": 0
  }, {
    "appoint_node_id": "",
    "calNum": true,
    "sentence": "好的，那就不打扰了。祝您生活愉快，再见!",
    "sentence_record_url": "https://aicc-cdn.zhexinit.com/robot-audio/176912690072117262/193478342426277471/2890c92c7957.wav",
    "speakType": 1,
    "is_transfer": 0,
    "type": 2,
    "multipleCalNum": true,
    "sentence_cut": [{
      "speech_rec_cut_id": "59500428412043682985",
      "sentence_text_url": "https://aicc-cdn.zhexinit.com/robot-audio/176912690072117262/193478342426277471/2890c92c7957.wav",
      "sentence_record_path": "/robot-audio/176912690072117262/193478342426277471/2890c92c7957.wav",
      "sen_rec_name": "3-挂机-不打扰.wav",
      "sentence_text": "好的，那就不打扰了。祝您生活愉快，再见!",
      "type": "record"
    }],
    "sms_id": "",
    "sentence_record_name": "3-挂机-不打扰.wav",
    "top": 687,
    "left": 776,
    "node_repetition_repeate": 0,
    "name": "跳转节点",
    "can_be_interrupted": 0,
    "id": "681f5710-5cd3-11e9-ab99-19d80eb14e40",
    "node_repetition": 0,
    "node_repetition_count": 0
  }, {
    "calNum": true,
    "sentence": "未识别",
    "answer_keyword_def": {
      "肯定": ["^[^(不|没)]*(有的|有啊|对的|对啊|是的|是啊)", "^[^(不|没)]*(行的|行啊|好的|好啊|可以|可行)", "^[^(不|没)]*(兴趣|需要|需求|打算|准备|想要)", "^[^(不|没)]*(参加|了解|清楚|同意|知道|喜欢)", "(请|接着|继续|你)(.*说|.*讲|.*介绍)", "(不错|没问题|没意见|没疑问)"],
      "拒绝": ["(没|不).*(考虑|兴趣|感兴趣|需要|想法|想要)", "(没|不).*(打算|需求|必要|做)", "不(必|行|了|可以|要|买)", "不(去|是|要|要再打电话|用|用介绍)", "不.*(了解|好|想|喜欢|知道|愿意)", "(唉|哎|啊|哦|嗯|谢谢).*(谢谢|拜拜|挂了|再见)", "算了", "用不(到|着|了)", "烦不烦", "搞错", "听不懂人话", "一天到晚打", "暂时不", "已经.*(有|过|买)"],
      "未识别": [],
      "否定": ["不知道", "^((?!听不清楚|说不清楚).)*不清楚", "不了解", "^没有$", "(不|没|没有)(兴趣|打算|想法|需要|打算|考虑)", "(木|没|木有|没有).*(需求|需要|兴趣|想法|打算|用)", "(不|木)(知道|要|想|好|同意|清楚|晓得|愿意|用|行|去|好|感兴趣|考虑|需要|打算)"]
    },
    "sentence_record_url": "",
    "speakType": 0,
    "client_intent": ["未识别", "肯定", "否定", "拒绝"],
    "question_list": {
      "肯定": ["好的", "没问题", "我有兴趣", "我同意"],
      "拒绝": ["不考虑", "没兴趣", "我不同意", "没想法"],
      "未识别": [],
      "否定": ["不知道", "不了解"]
    },
    "all_client_intent": [{
      "patentId": "1ef59310-9e55-11e9-aaaa-21699b027429",
      "name": "肯定",
      "checked": true,
      "id": "26e150a0-9e55-11e9-aaaa-21699b027429"
    }, {
      "patentId": "1ef59310-9e55-11e9-aaaa-21699b027429",
      "name": "否定",
      "checked": true,
      "id": "26e150a1-9e55-11e9-aaaa-21699b027429"
    }, {
      "patentId": "1ef59310-9e55-11e9-aaaa-21699b027429",
      "name": "拒绝",
      "checked": true,
      "id": "26e150a2-9e55-11e9-aaaa-21699b027429"
    }, {
      "patentId": "1ef59310-9e55-11e9-aaaa-21699b027429",
      "name": "未识别",
      "checked": true,
      "id": "26e150a3-9e55-11e9-aaaa-21699b027429"
    }],
    "is_transfer": 0,
    "type": 1,
    "multipleCalNum": true,
    "sentence_cut": [{
      "speech_rec_cut_id": "26e150a4-9e55-11e9-aaaa-21699b027429",
      "sentence_text_url": "",
      "sen_rec_name": "",
      "sentence_text": "未识别",
      "type": "tts"
    }],
    "intent_tag_def": {
      "肯定": {
        "tag_list": [],
        "intent_code": ""
      },
      "拒绝": {
        "tag_list": [],
        "intent_code": ""
      },
      "未识别": {
        "tag_list": [],
        "intent_code": ""
      },
      "否定": {
        "tag_list": [],
        "intent_code": ""
      }
    },
    "sms_id": "",
    "sentence_record_name": "",
    "top": 194,
    "left": 1041,
    "node_repetition_repeate": 0,
    "name": "普通节点",
    "can_be_interrupted": 1,
    "id": "1ef59310-9e55-11e9-aaaa-21699b027429",
    "node_repetition": 0,
    "node_repetition_count": 0
  }, {
    "appoint_node_id": "",
    "calNum": true,
    "sentence": "1111",
    "sentence_record_url": "",
    "speakType": 0,
    "is_transfer": 0,
    "type": 2,
    "multipleCalNum": true,
    "sentence_cut": [{
      "speech_rec_cut_id": "325598b0-9e55-11e9-aaaa-21699b027429",
      "sentence_text_url": "",
      "sen_rec_name": "",
      "sentence_text": "1111",
      "type": "tts"
    }],
    "sms_id": "",
    "sentence_record_name": "",
    "top": 507,
    "left": 1130,
    "node_repetition_repeate": 0,
    "name": "跳转节点",
    "id": "2fdea540-9e55-11e9-aaaa-21699b027429",
    "node_repetition": 0,
    "node_repetition_count": 0
  }],
  "speech_node_id": "3940",
  "speech_id": "1808",
  "graph": [{
    "id": "fd28fc40-5cd2-11e9-ab99-19d80eb14e40",
    "childrenList": [{
      "answer_uuid": ["079ff890-5cd3-11e9-ab99-19d80eb14e40"],
      "id": "1afca2d0-5cd3-11e9-ab99-19d80eb14e40",
      "childrenList": [],
      "answer_id": ["肯定"]
    }, {
      "answer_uuid": ["079ff891-5cd3-11e9-ab99-19d80eb14e40", "079ff892-5cd3-11e9-ab99-19d80eb14e40"],
      "id": "38173290-5cd3-11e9-ab99-19d80eb14e40",
      "childrenList": [{
        "answer_uuid": ["3c016511-5cd3-11e9-ab99-19d80eb14e40", "3c016512-5cd3-11e9-ab99-19d80eb14e40"],
        "id": "681f5710-5cd3-11e9-ab99-19d80eb14e40",
        "childrenList": [],
        "answer_id": ["否定", "拒绝"]
      }, {
        "answer_uuid": ["3c016510-5cd3-11e9-ab99-19d80eb14e40", "3c016513-5cd3-11e9-ab99-19d80eb14e40"],
        "id": "84359630-5cd3-11e9-ab99-19d80eb14e40",
        "childrenList": [],
        "answer_id": ["肯定", "未识别"]
      }],
      "answer_id": ["否定", "拒绝"]
    }, {
      "answer_uuid": ["079ff893-5cd3-11e9-ab99-19d80eb14e40"],
      "id": "1ef59310-9e55-11e9-aaaa-21699b027429",
      "childrenList": [{
        "answer_uuid": ["26e150a0-9e55-11e9-aaaa-21699b027429"],
        "id": "2bb5e320-9e55-11e9-aaaa-21699b027429",
        "childrenList": [],
        "answer_id": ["肯定"]
      }, {
        "answer_uuid": ["26e150a1-9e55-11e9-aaaa-21699b027429", "26e150a2-9e55-11e9-aaaa-21699b027429", "26e150a3-9e55-11e9-aaaa-21699b027429"],
        "id": "2fdea540-9e55-11e9-aaaa-21699b027429",
        "childrenList": [],
        "answer_id": ["否定", "拒绝", "未识别"]
      }],
      "answer_id": ["未识别"]
    }]
  }]
}