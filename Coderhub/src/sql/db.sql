/*
 Navicat Premium Data Transfer

 Source Server         : codexgh
 Source Server Type    : MySQL
 Source Server Version : 50740
 Source Host           : localhost:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 50740
 File Encoding         : 65001

 Date: 15/04/2023 12:04:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of avatar
-- ----------------------------
INSERT INTO `avatar` VALUES (1, '94b2bdf34a47809d5f2e52ae7fdee60f', 'image/jpeg', 611549, 5, '2023-04-14 14:20:39', '2023-04-14 14:20:39');
INSERT INTO `avatar` VALUES (2, '6d4612a3d746fe6decb3025220320747', 'image/png', 32776, 5, '2023-04-14 14:35:18', '2023-04-14 14:35:18');
INSERT INTO `avatar` VALUES (3, 'f1a7c3b5048638d6521a548cc3fac3e1', 'image/png', 32776, 5, '2023-04-14 15:06:48', '2023-04-14 15:06:48');
INSERT INTO `avatar` VALUES (4, '93f880a781cf7b7903aba715db3ccb37', 'image/png', 32776, 5, '2023-04-14 15:06:56', '2023-04-14 15:06:56');
INSERT INTO `avatar` VALUES (5, '5debf59df08b30b7040ee2a67015c311', 'image/png', 32776, 5, '2023-04-14 15:07:22', '2023-04-14 15:07:22');
INSERT INTO `avatar` VALUES (6, 'e2672827bb47eb8db0a1d7fd1ec62192', 'image/png', 32776, 5, '2023-04-14 15:08:32', '2023-04-14 15:08:32');
INSERT INTO `avatar` VALUES (7, '6a56e2e0b365cec3a713e5a5d44826e6', 'image/png', 32776, 5, '2023-04-14 15:09:55', '2023-04-14 15:09:55');
INSERT INTO `avatar` VALUES (8, 'd0d42ba18b99e184dcb078a185433c5d', 'image/png', 32776, 5, '2023-04-14 15:10:15', '2023-04-14 15:10:15');
INSERT INTO `avatar` VALUES (9, '2c5e0bca7e0ae1b5b76c3cd88984561a', 'image/png', 32776, 5, '2023-04-14 15:10:41', '2023-04-14 15:10:41');
INSERT INTO `avatar` VALUES (10, '6ff0316a4ce15a417ac78c6f1188219b', 'image/png', 32776, 5, '2023-04-14 15:10:50', '2023-04-14 15:10:50');
INSERT INTO `avatar` VALUES (11, 'a5e8a98746c419106c4571d64469f6cb', 'image/png', 32776, 5, '2023-04-14 15:11:25', '2023-04-14 15:11:25');
INSERT INTO `avatar` VALUES (12, 'be417af87f1e0484446d506a676b0e82', 'image/png', 32776, 5, '2023-04-14 15:12:07', '2023-04-14 15:12:07');
INSERT INTO `avatar` VALUES (13, '6c68fe4dba73cf80c8eefcb6484765e1', 'image/png', 32776, 5, '2023-04-14 15:12:34', '2023-04-14 15:12:34');
INSERT INTO `avatar` VALUES (14, '09da64f883790ad792960eb099e0369f', 'image/png', 32776, 5, '2023-04-14 15:13:08', '2023-04-14 15:13:08');
INSERT INTO `avatar` VALUES (15, '84f1f667b8705e10120d4753a0902433', 'image/png', 32776, 5, '2023-04-14 15:13:48', '2023-04-14 15:13:48');
INSERT INTO `avatar` VALUES (16, 'de53aef95b4114968554cef2f0f47395', 'image/png', 32776, 5, '2023-04-14 15:14:33', '2023-04-14 15:14:33');
INSERT INTO `avatar` VALUES (17, '900c9f5251853927179165c55ff1885d', 'image/png', 32776, 5, '2023-04-14 15:15:15', '2023-04-14 15:15:15');
INSERT INTO `avatar` VALUES (18, 'e7d92ea3d210646e69b5e2667516fcbe', 'image/jpeg', 354798, 5, '2023-04-14 21:31:14', '2023-04-14 21:31:14');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `moment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_id` int(11) NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, '一件微不足道的小事　　一朵小花能带来一片色彩', 1, 5, NULL, '2023-04-13 15:23:41', '2023-04-13 15:23:41');
INSERT INTO `comment` VALUES (2, 'kunkun打球太帅了~~~', 2, 5, NULL, '2023-04-13 15:23:41', '2023-04-13 15:23:41');
INSERT INTO `comment` VALUES (4, '说的真好呢', 2, 5, NULL, '2023-04-13 15:55:52', '2023-04-13 15:55:52');
INSERT INTO `comment` VALUES (5, '真美好的一篇动态', 4, 5, NULL, '2023-04-13 16:02:52', '2023-04-13 16:02:52');

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of label
-- ----------------------------
INSERT INTO `label` VALUES (1, '前端', '2023-04-13 16:49:51', '2023-04-13 16:49:51');
INSERT INTO `label` VALUES (3, '大数据', '2023-04-13 17:38:55', '2023-04-13 17:38:55');
INSERT INTO `label` VALUES (4, '后端', '2023-04-13 17:38:55', '2023-04-13 17:38:55');

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES (1, '秋季的美是成熟的，它不像春那么羞涩，夏那么坦露，冬那么内向。秋季的美是理智的。它不像春那么妩媚，夏那么火势，冬那么含蓄。', 1, '2023-04-13 14:46:30', '2023-04-13 14:46:30');
INSERT INTO `moment` VALUES (2, '天空是蔚蓝色，太阳收起了冬天的羞涩，毫不吝啬地洒下温情的阳光。我要出来，我要出来！豆子们欢欣地叫嚷着。', 5, '2023-04-12 16:09:53', '2023-04-13 14:40:23');
INSERT INTO `moment` VALUES (3, '太阳收起了冬天的羞涩，毫不吝啬地洒下温情的阳光。我要出来，我要出来！豆子们欢欣地叫嚷着。', 1, '2023-04-12 16:18:11', '2023-04-12 17:56:32');
INSERT INTO `moment` VALUES (4, '如果我是阳光，我将照亮所有的黑暗。如果我是清风，我将吹走世间的尘埃。如果我是春雨，我将滋润大家的心田。', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (5, '秋季的美是成熟的，它不像春那么羞涩，夏那么坦露，冬那么内向。秋季的美是理智的。它不像春那么妩媚，夏那么火势，冬那么含蓄。', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (6, '我摇摇头，突然释怀，再多烦恼，再多困难，都是要面对的，跃过困难之后的轻松，愉悦都是前所未有的，我是努力击败它们。烦恼就像一片叶子，秋季到了，就会凋落，化成我成长的肥料。', 2, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (7, '别在树下徘徊，别在雨中沉思，别在黑暗中落泪。向前看，不要回头，只要你勇于面对抬起头来，就会发现，分数的阴霾不过是短暂的雨季。向前看，还有一片明亮的天，不会使人感到彷徨。', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (8, '生活就是这样，别人只看结果，自己独撑过程，面对生活，我们除了坚强，就是继续，别无选择，路可以回头看，但不可以回头走！', 3, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (9, '夏天在天空中，美丽的小鸟在蔚蓝的天空中飞翔。夏天在公园里，树木茂盛；夏天在草坪里，嫩绿的小草，花花、绿绿的野花。大树像一把大伞，偶尔，你会看到大大家在树荫下下棋、聊天，小孩子们在树下捉迷藏。', 1, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (10, '当季节逐渐走向冷凉，那些花丛草间的美丽，都已被枯黄所逐渐替代。岁月，就是一道道流程相拼的组合，无论那一程时光失去美丽，都会有一段记忆在心底存着。人的思维有时候就是那样脆弱，即使，一滴滴的念想，都能牵动着脉搏为此波动。', 2, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (11, '成功是你梦寐以求那朵红玫瑰，挫折正是那遍及周围针刺。快乐是你辛勤耕耘获得果实，悲伤正是那成熟前秕粒。', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (12, '远去的飞鸟，永恒的牵挂是故林；漂泊的船儿，始终的惦记是港湾；奔波的旅人，无论是匆匆夜归还是离家远去，心中千丝万缕、时时惦念的地方，还是家。', 3, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (13, '生命的最美姿态，就是以风的姿态行走，以云的姿态卷舒。做事情尽力但不刻意，随缘但不随意。学最好的别人，做最好的自己。', 3, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (14, '时间好比一把锋利的小刀，如果用得不恰当，会在美丽的面孔上刻下深深的纹路，使旺盛的青春月复一月，年复一年的消磨掉。', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (15, '我想给你幸福，却走不进你的世界，我想用我的全世界，来换取一张通往你的世界的入场券，不外，那只不过是我的两厢情愿罢了。', 5, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (16, '如果真有那种一拍即合的爱情就好了，不需要暧昧的你来我往。不需要花太多的时间去培养，我已经没有时间去玩猜测的游戏，因为我怕会受伤害。我们想要的，大概就是那种，你看一眼就知道，是这个人没有错了。', 3, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (17, '南美洲有一种树，雨树，树冠巨大圆满如罩钟，从树冠一端到另一端能够有三十米之遥。阴天或夜间，细叶合拢，雨，直直自叶隙落下，所以叶冠虽巨大且密，树底的小草，却茵茵然葱绿。兄弟，不是永不交叉的铁轨，倒像同一株雨树上的枝叶，虽 然隔开 三十米，但是同树同根，日开夜合，看同一场雨直直落地，与树雨共老，挺好的。 ——龙应台 《目送》', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (18, '没有了你，我的生活反而有了规律，我再也不用声嘶力竭地去和你争吵。不用再苦苦的等你的信息，等你到午夜更深，不用再为等不到你的信息伤心、难过、胡乱猜疑。', 2, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (19, '时间啊，究竟要人们付出多大的代价，才能忘却，那凄恻的往事，那压抑的痛苦，那艰涩的。等待，那焦灼的渴盼，那雷电的夜，那剌眼的阳光，那灵魂难耐的孤寂？', 1, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (20, '一份感情或爱情，要嘛就不要投入，要嘛就要认真和专一的投入，在一起后就得好好经营。不然，何必相互折磨人生。', 2, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (21, '心海奔涌，撩动秋思。时光茬苒，历历在目。细密地回顾往日的每一时刻，一次一次生命音', 4, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (22, '啊，我见到了春天。远处的群山连绵起伏，变得苍绿了。近处山坡上的小草也悄悄地钻出地面，它们嫩生生，绿油油的。肥胖的小叶儿，像一个个刚刚睡醒的胖娃娃。这一片，那一簇，点缀着这陡峭的山坡。山坡上的树木也在不声不响地抽出新的枝条，长出了像小草一样的新芽。柳树的枝条向下垂着，就像一条条线挂在树上。那嫩黄色的小叶片，就像在线上系的花瓣儿。杨树开了花，这些花一串串的，是紫红色的。身上长满很软的小毛，像一只只毛毛虫，真有趣。山桃花展瓣吐蕊，杏花闹上枝头，梨花争奇斗艳。 夏天田野里的麦子，在不知不觉间由青色而变成枯黄，使一片原野顿换了一副面目。风儿带着微微的暖意吹着，时时送来布谷鸟的叫声，这是告诉我们“春已归去”而是初夏四月的季节了。', 2, '2023-04-12 16:18:11', '2023-04-12 16:18:11');
INSERT INTO `moment` VALUES (23, '秋季的美是成熟的，它不像春那么羞涩，夏那么坦露，冬那么内向。秋季的美是理智的。它不像春那么妩媚，夏那么火势，冬那么含蓄。', 5, '2023-04-13 14:45:48', '2023-04-13 14:45:48');

-- ----------------------------
-- Table structure for moment_label
-- ----------------------------
DROP TABLE IF EXISTS `moment_label`;
CREATE TABLE `moment_label`  (
  `moment_id` int(11) NOT NULL,
  `label_id` int(11) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`, `label_id`) USING BTREE,
  INDEX `label_id`(`label_id`) USING BTREE,
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment_label
-- ----------------------------
INSERT INTO `moment_label` VALUES (2, 1, '2023-04-13 17:10:18', '2023-04-13 17:10:18');
INSERT INTO `moment_label` VALUES (2, 3, '2023-04-13 18:03:08', '2023-04-13 18:03:08');
INSERT INTO `moment_label` VALUES (2, 4, '2023-04-13 18:03:08', '2023-04-13 18:03:08');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar_url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '李磊', '947351e25bcd58248006ac47d9a5e9b8', '2023-04-12 16:12:43', '2023-04-12 16:12:43', NULL);
INSERT INTO `user` VALUES (2, '丽丽', '947351e25bcd58248006ac47d9a5e9b8', '2023-04-12 16:12:43', '2023-04-12 16:12:43', NULL);
INSERT INTO `user` VALUES (3, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '2023-04-11 17:55:46', '2023-04-11 17:55:46', NULL);
INSERT INTO `user` VALUES (4, '李华', '947351e25bcd58248006ac47d9a5e9b8', '2023-04-12 16:12:43', '2023-04-12 16:12:43', NULL);
INSERT INTO `user` VALUES (5, 'codexgh', '947351e25bcd58248006ac47d9a5e9b8', '2023-04-12 15:09:03', '2023-04-14 15:12:34', 'http://localhost:3000/users/avatar/5');
INSERT INTO `user` VALUES (6, 'zhuriyu', 'e10adc3949ba59abbe56e057f20f883e', '2023-04-14 21:20:03', '2023-04-14 21:20:03', NULL);

SET FOREIGN_KEY_CHECKS = 1;
