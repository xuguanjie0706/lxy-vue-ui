import './index.scss';
const HeaderPages = () => {
  return (
    <>
      <div className="lxy-header-pages">
        <header className="lxy-navbar">
          <div className="lxy-navbar-wrapper">我是一个导航</div>
        </header>
        <section className="bg-hex-fff">
          <h1>欢迎来到我的HTML文章</h1>
          <p className="bg-hex-b2a8bb">
            这是一个简单的HTML文章示例，用于展示如何在网页上呈现文本内容。
          </p>
          <p>
            HTML（HyperText Markup
            Language）是一种用于创建网页的标准标记语言。通过使用HTML，我们可以定义网页的结构和内容，并通过浏览器呈现给用户。
          </p>
          <p>
            在HTML中，我们可以使用各种标签来标记文本、图像、链接等。例如，标签用于定义标题，标签用于定义段落，标签用于插入图像等。
          </p>
          <p>
            此外，HTML还支持CSS（Cascading Style
            Sheets）来定义网页的样式和布局。通过CSS，我们可以控制文本的字体、颜色、大小等属性，以及元素的定位、边距、边框等样式。
          </p>
          <p>
            在上面的示例中，我们使用了一些简单的CSS样式来美化文章的外观。你可以通过修改CSS样式来改变文章的样式和布局。
          </p>
          <p>
            希望这个简单的HTML文章示例能够帮助你理解HTML的基本概念和使用方法。如果你对HTML和网页开发感兴趣，可以进一步学习相关的知识和技术。
          </p>
        </section>
      </div>
    </>
  );
};
export default HeaderPages;
