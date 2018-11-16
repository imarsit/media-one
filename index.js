module.exports = {
	// 模版标识
	name: 'example',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '产品展示',
			// 路径
			path: '/product',
			// 预览图
			thumbnail: 'product.png',
		},
		{
			name: '新闻中心',
			// 路径
			path: '/news',
			// 预览图
			thumbnail: 'news.png',
		},
		{
			name: '平面设计/公司新闻/行业新闻/最新动态',
			// 路径
			path: '/news_show',
			// 预览图
			thumbnail: 'news_show.png',
		},
		{
			name: '关于我们',
			// 路径
			path: '/about',
			// 预览图
			thumbnail: 'about.png',
		},
		{
			name: '联系我们',
			// 路径
			path: '/contact',
			// 预览图
			thumbnail: 'contact.png',
		},
		{
			name: '产品详情',
			// 路径
			path: '/product_show',
			// 预览图
			thumbnail: 'product_show.png',
		},
		{
			name: '服务中心',
			// 路径
			path: '/service',
			// 预览图
			thumbnail: 'service.png',
		}
	]
}
