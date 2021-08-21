// search模块
(function() {
    var arr = ['百度一下，你就知道', 'Google 搜索', '微软 Bing 搜索', '海量图片搜索', '百度百科', '高德地图', '中英文文献检索'];
    $('.nav').on('click', 'span', function() {
        $(this).addClass('SearchCurrent').siblings('span').removeClass('SearchCurrent');
        $('.searchInp').focus().prop('placeholder', arr[$(this).index()]);
    });
})();

// content模块
(function() {
    var arr = [
        [
            ['热门', '百度', '谷歌', '必应', '搜狗', '今日头条', '煎蛋', '数字尾巴'],
            ['社交', '微博', '贴吧', '知乎', '豆瓣', 'V2EX', '简书', 'Twitter'],
            ['资讯', '网易', '腾讯', '新浪', '搜狐', '凤凰网', '人民网', '新华网'],
            ['购物', '淘宝', '京东', '亚马逊', '苏宁易购', '网易严选', '小米商城', '什么值得买'],
            ['视频', '优酷', '爱奇艺', '腾讯视频', '哔哩哔哩', 'YouTube', '斗鱼直播', '虎牙直播'],
            ['工作', '领英', '拉勾网', '智联招聘', '前程无忧', '应届生', '脉脉', '酷工作'],
            ['生活', '美团', '大众点评', '携程', '去哪儿', '飞猪', '12306', '马蜂窝'],
            ['便捷', '词典翻译', '天气预报', '快递查询', '在线转换', '临时网盘', '网页微信', 'QQ邮箱']
        ],
        [
            ['发现', '煎蛋', '果壳网', '堆糖', '糗事百科', '暴走漫画', '百思不得姐', '好奇心日报'],
            ['影视', '优酷', '爱奇艺', '腾讯视频', '乐视视频', '芒果TV', '央视网', 'YouTube'],
            ['直播', '斗鱼直播', 'YY直播', '虎牙直播', '花椒直播', '企鹅电竞', '一直播', 'Twitch'],
            ['动漫', '哔哩哔哩', 'AcFun', '嘀哩嘀哩', '半次元', '网易漫画', '有妖气', '萌娘百科'],
            ['游戏', 'Steam', '游民星空', '口袋巴士', '17173', '多玩游戏', '3DMGAME', '橙光游戏'],
            ['音乐', '网易云音乐', '虾米音乐', 'QQ音乐', '豆瓣FM', '喜马拉雅FM', '音悦Tai', '5sing原创'],
            ['体育', '腾讯体育', '网易体育', '新浪体育', '央视体育', '乐视体育', '直播吧', '虎扑'],
            ['小说', '起点中文网', '纵横中文网', '红袖添香', '豆瓣阅读', '网易云阅读', '鲸鱼阅读', '片刻']
        ],
        [
            ['课程', '网易公开课', '网易云课堂', '腾讯课堂', '中国大学MOOC', '慕课网', '极客学院', '爱课程'],
            ['文库', '百度文库', '道客巴巴', '豆丁网', '爱问共享资料', '360doc', '凌风云文库', 'MBA智库'],
            ['学术', '谷歌学术', '百度学术', '必应学术', '中国知网', '万方数据', '维普网', 'OALib'],
            ['词典', '汉语词典', '剑桥词典', '柯林斯词典', '有道词典', '汉典', '日中辞典', '韩中词典'],
            ['资讯', '腾讯教育', '搜狐教育', '新浪教育', '中国教育在线', '新东方', '沪江英语', '无忧考网'],
            ['模考', '我要模考', '考满分留学', 'LeetCode', '中华会计网校', '打字练习', '驾校一点通', '驾考宝典'],
            ['便捷', '多邻国', '扇贝', '百词斩', '51VOA', '在线PDF', '公式字符', 'Wolfram Alpha'],
            ['成绩', '英语四六级', '普通话水平', '会计从业资格', '教师资格', '计算机等级', '雅思', '托福']
        ],
        [
            ['出行', '美团', '携程', '去哪儿', '飞猪', '途牛', '12306', '马蜂窝'],
            ['美食', '下厨房', '美食天下', '豆果美食', '搜狐美食', '心食谱', '中华菜谱网', '美食杰'],
            ['房产', '房天下', '链家', '房多多', '安居客', '腾讯房产', '搜狐焦点', '乐居'],
            ['汽车', '汽车之家', '太平洋汽车', '易车网', '爱卡汽车', '网易汽车', '新浪汽车', '搜狐汽车'],
            ['财经', '东方财富', '第一财经', '凤凰财经', '网易财经', '和讯财经', '雪球', '股吧'],
            ['时尚', '太平洋时尚', '瑞丽网', '美丽说', '蘑菇街', 'YOKA', 'OnlyLady', 'VOGUE'],
            ['健康', '搜狐健康', '新浪健康', '凤凰健康', '寻医问药', '丁香园', '39健康网', '有问必答'],
            ['查询', '网速测试', '电话归属地', '列车时刻', '实时航班', '台风路径', '交通违章查询', '比一比价']
        ],
        [
            ['发现', 'V2EX', '掘金', '开源中国', 'CSDN', 'InfoQ', 'NEXT', 'HackerNews'],
            ['数码', '数字尾巴', '爱范儿', '雷锋网', '极客公园', '比特网', 'ZEALER', 'Engadget'],
            ['平台', 'GitHub', 'Coding', '石墨', '百度脑图', 'CmdMarkdown', 'TinyPNG', 'SM.MS图床'],
            ['工具', 'IP查询', 'Speedtest', '17CE', '在线工具', '代码格式化', '临时邮箱', '域名比价'],
            ['文档', 'Microsoft文档', 'Google开发者', 'MDN文档', 'W3school', '菜鸟教程', 'Linux命令', '微信小程序'],
            ['博客', '阿里UED', '有赞技术', '京东JDC', '腾讯全端', '百度UED', '人人网FED', '阮一峰博客'],
            ['资讯', '少数派', '数码荔枝', '异次元', 'Softonic', 'Maclnformer', '站长下载', '中科大镜像'],
            ['云端', '阿里云', '腾讯云', 'AWS', 'GoogleCloud', 'Linode', 'DigitalOcean', 'Bandwagon']
        ],
        [
            ['灵感', 'Behance', 'Dribbble', 'Muzli', 'MyDesy', 'ZCOOL', 'FWA', 'LandBook'],
            ['图库', 'Huaban', 'Unsplash', 'Pixabay', '500px', 'Pinterest', 'PEXELS', 'SplitShire'],
            ['素材', 'NiPic', '58Pic', 'freepik', 'UIKit', 'Pixeden', 'Subtlepatterns', 'Fribbble'],
            ['字体', 'Fontsup', 'dafont', 'Qiuziti', 'MyFonts', 'Fonts2u', 'Fontfabric', 'UrbanFonts'],
            ['交互', 'UICN', 'SiteSee', 'UIGarage', 'BestWebsite', 'CollectUI', 'UIMovement', 'Reeoo'],
            ['颜色', 'ColorHunt', 'Coolors', 'AdobeColor', 'WebGradients', 'Trianglify', 'ColorFavs', 'Colllor'],
            ['工具', 'Fotor', 'Photopea', 'AutoDraw', 'Figma', 'SVG Draw', 'CloudConvert', 'TinyPNG'],
            ['规范', 'Apple', 'Google', 'Microsoft', 'Material', 'Android', 'ScreenSize', 'WeUI']
        ]
    ];
    $('.tab').on('click', 'span', function() {
        $('.info>ul').stop().fadeIn().siblings('.gear-setting').stop().fadeOut();
        $(this).css('backgroundColor', '#e5e5e5').siblings('span').css('backgroundColor', '#f7f7f7');
        fill(arr[$(this).index()]);
    });

    function fill(arr) {
        $.each(arr, function(index, ele) {
            $.each(ele, function(i, e) {
                $('.info').children('ul').eq(index).children('li').eq(i).children('a').text(e);
                if (i == 0) {
                    $('.info').children('ul').eq(index).children('li').eq(0).text(e);
                }
            })
        });
    }

    $('.icon-gear').on('click', function() {
        $('.gear-setting').stop().fadeIn().siblings('ul').stop().fadeOut();
    });
})();

// picture模块
(function() {
    var searchTop = $('.searchBar').offset().top;
    $(window).on('scroll', function() {
        if ($(document).scrollTop() >= searchTop) {
            $('.pic').stop().slideDown();
        }
    });
    $('.pic').on('mouseenter mouseleave', function() {
        $(this).children('p').stop().fadeToggle();
        $(this).children('.maskpic').stop().fadeToggle();
    })
})();