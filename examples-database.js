// Comprehensive Examples Database for All Topics
const examples = {
    // ============================================
    // HTML EXAMPLES
    // ============================================

    'html-doctype': {
        title: 'DOCTYPE Declaration',
        language: 'HTML',
        description: 'The DOCTYPE declaration tells the browser which version of HTML the page is using. For HTML5, use the simple <!DOCTYPE html> declaration. This must be the very first thing in your HTML document.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`,
        notes: '<strong>Key Points:</strong><br>• Must be the first line<br>• Not case-sensitive<br>• Triggers standards mode in browsers<br>• Without it, browsers use quirks mode'
    },

    'html-structure': {
        title: 'HTML Document Structure',
        language: 'HTML',
        description: 'Every HTML document follows a standard structure with nested elements. The html element wraps everything, head contains metadata, and body contains visible content.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata goes here -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Visible content goes here -->
    <header>
        <h1>Website Header</h1>
    </header>

    <main>
        <p>Main content area</p>
    </main>

    <footer>
        <p>&copy; 2026</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,
        output: '<div style="padding:20px;background:#f8f9fa;border-radius:8px"><strong>Document Parts:</strong><ul style="margin:15px 0;padding-left:25px"><li><code>&lt;html&gt;</code> - Root element</li><li><code>&lt;head&gt;</code> - Metadata container</li><li><code>&lt;body&gt;</code> - Visible content</li></ul></div>',
        notes: 'Always use semantic HTML5 elements like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> for better accessibility and SEO.'
    },

    'html-head': {
        title: 'HEAD Elements',
        language: 'HTML',
        description: 'The head section contains metadata about the document - information for browsers and search engines, not visible to users.',
        code: `<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">

    <!-- Responsive viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page title (shows in browser tab) -->
    <title>My Awesome Website</title>

    <!-- SEO metadata -->
    <meta name="description" content="A brief description of your page">
    <meta name="keywords" content="web, development, html">
    <meta name="author" content="Your Name">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="styles.css">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">

    <!-- Scripts -->
    <script src="script.js" defer></script>
</head>`,
        notes: '<strong>Best Practices:</strong><br>• Always include charset UTF-8<br>• Add viewport meta for mobile<br>• Keep title under 60 characters<br>• Description should be 150-160 chars<br>• Use <code>defer</code> or <code>async</code> for scripts'
    },

    'html-metadata': {
        title: 'Meta Tags',
        language: 'HTML',
        description: 'Meta tags provide metadata about the HTML document. They are used by search engines, social media platforms, and browsers to understand and display your content correctly.',
        code: `<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn web development">

    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:title" content="My Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="My Page Title">
    <meta name="twitter:description" content="Page description">
    <meta name="twitter:image" content="https://example.com/image.jpg">

    <!-- Other useful meta tags -->
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#667eea">
</head>`,
        notes: 'Social media meta tags control how your site looks when shared. Test with Facebook Debugger and Twitter Card Validator.'
    },

    'html-headings': {
        title: 'Headings (h1-h6)',
        language: 'HTML',
        description: 'HTML provides six levels of headings. Use them hierarchically - h1 for main title, h2 for sections, h3 for subsections, etc. Important for SEO and accessibility.',
        code: `<h1>Main Page Title (h1)</h1>
<p>Only one h1 per page for best SEO</p>

<h2>Major Section (h2)</h2>
<p>Section content...</p>

<h3>Subsection (h3)</h3>
<p>Subsection content...</p>

<h4>Sub-subsection (h4)</h4>
<h5>Minor heading (h5)</h5>
<h6>Smallest heading (h6)</h6>`,
        output: `<div style="padding:20px">
            <h1 style="font-size:2.5em;margin:15px 0;color:#1a1a2e">Main Page Title (h1)</h1>
            <h2 style="font-size:2em;margin:12px 0;color:#2d2d4a">Major Section (h2)</h2>
            <h3 style="font-size:1.6em;margin:10px 0;color:#404060">Subsection (h3)</h3>
            <h4 style="font-size:1.3em;margin:8px 0;color:#505075">Sub-subsection (h4)</h4>
            <h5 style="font-size:1.1em;margin:6px 0;color:#606085">Minor heading (h5)</h5>
            <h6 style="font-size:1em;margin:6px 0;color:#707095">Smallest heading (h6)</h6>
        </div>`,
        notes: '<strong>Hierarchy Rules:</strong><br>• Use only ONE h1 per page<br>• Don\'t skip levels (h1→h3)<br>• Headings create document outline<br>• Screen readers use headings for navigation'
    },

    'html-paragraphs': {
        title: 'Paragraphs',
        language: 'HTML',
        description: 'The <p> tag defines a paragraph. Browsers automatically add space before and after each paragraph. Use paragraphs to structure your text content logically.',
        code: `<p>This is a regular paragraph with some text content.</p>

<p>
    Paragraphs can contain multiple sentences.
    The browser will automatically add spacing between paragraphs.
    Line breaks within the tag don't affect the display.
</p>

<p>
    You can also include <strong>bold text</strong>,
    <em>italic text</em>, <a href="#">links</a>,
    and other inline elements within paragraphs.
</p>`,
        output: `<div style="padding:20px;line-height:1.8">
            <p style="margin:15px 0;color:#333">This is a regular paragraph with some text content.</p>
            <p style="margin:15px 0;color:#333">Paragraphs can contain multiple sentences. The browser will automatically add spacing between paragraphs. Line breaks within the tag don't affect the display.</p>
            <p style="margin:15px 0;color:#333">You can also include <strong>bold text</strong>, <em>italic text</em>, <a href="#" style="color:#667eea">links</a>, and other inline elements within paragraphs.</p>
        </div>`
    },

    'html-formatting': {
        title: 'Text Formatting',
        language: 'HTML',
        description: 'HTML provides various tags for formatting text. Use semantic tags (like <strong> and <em>) when possible, as they convey meaning beyond just styling.',
        code: `<p><strong>Strong/Bold text</strong> - Important text</p>
<p><b>Bold text</b> - Just styling, no semantic meaning</p>

<p><em>Emphasized text</em> - Emphasized text</p>
<p><i>Italic text</i> - Just styling, no semantic meaning</p>

<p><mark>Highlighted text</mark> - Marked/highlighted</p>
<p><small>Small text</small> - Fine print</p>
<p><del>Deleted text</del> - Removed text</p>
<p><ins>Inserted text</ins> - Added text</p>

<p>H<sub>2</sub>O - Subscript</p>
<p>X<sup>2</sup> - Superscript</p>

<p><code>const x = 10;</code> - Inline code</p>
<p><kbd>Ctrl + S</kbd> - Keyboard input</p>
<p><samp>Error 404</samp> - Sample output</p>`,
        output: `<div style="padding:20px;line-height:2">
            <p><strong>Strong/Bold text</strong> - Important text</p>
            <p><b>Bold text</b> - Just styling, no semantic meaning</p>
            <p><em>Emphasized text</em> - Emphasized text</p>
            <p><i>Italic text</i> - Just styling, no semantic meaning</p>
            <p><mark style="background:#ffe66d;padding:2px 6px">Highlighted text</mark> - Marked/highlighted</p>
            <p><small>Small text</small> - Fine print</p>
            <p><del>Deleted text</del> - Removed text</p>
            <p><ins style="text-decoration:underline">Inserted text</ins> - Added text</p>
            <p>H<sub>2</sub>O - Subscript</p>
            <p>X<sup>2</sup> - Superscript</p>
            <p><code style="background:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:monospace">const x = 10;</code> - Inline code</p>
            <p><kbd style="background:#333;color:white;padding:3px 8px;border-radius:3px;font-family:monospace">Ctrl + S</kbd> - Keyboard input</p>
            <p><samp style="background:#f4f4f4;padding:2px 6px;font-family:monospace">Error 404</samp> - Sample output</p>
        </div>`,
        notes: 'Prefer semantic tags (<strong>, <em>) over styling tags (<b>, <i>) for better accessibility and SEO.'
    },

    'html-semantic-text': {
        title: 'Semantic Text Elements',
        language: 'HTML',
        description: 'Semantic HTML elements clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO.',
        code: `<!-- Abbreviation -->
<p><abbr title="HyperText Markup Language">HTML</abbr></p>

<!-- Citation -->
<p><cite>The Great Gatsby</cite> by F. Scott Fitzgerald</p>

<!-- Definition -->
<p><dfn>HTML</dfn> is the standard markup language for web pages.</p>

<!-- Time -->
<p>Posted on <time datetime="2026-02-16">February 16, 2026</time></p>

<!-- Quotations -->
<blockquote cite="https://example.com">
    <p>This is a longer quotation that stands alone.</p>
</blockquote>

<p>As Einstein said, <q>Imagination is more important than knowledge.</q></p>

<!-- Address -->
<address>
    Written by <a href="mailto:user@example.com">John Doe</a><br>
    123 Main St, City, Country
</address>`,
        output: `<div style="padding:20px;line-height:2">
            <p><abbr title="HyperText Markup Language" style="border-bottom:1px dotted #666;cursor:help">HTML</abbr> - Hover to see full form</p>
            <p><cite style="font-style:italic">The Great Gatsby</cite> by F. Scott Fitzgerald</p>
            <p><dfn style="font-style:italic;font-weight:600">HTML</dfn> is the standard markup language for web pages.</p>
            <p>Posted on <time datetime="2026-02-16" style="color:#667eea">February 16, 2026</time></p>
            <blockquote style="border-left:4px solid #667eea;padding-left:20px;margin:20px 0;font-style:italic;color:#555">
                <p>This is a longer quotation that stands alone.</p>
            </blockquote>
            <p>As Einstein said, <q style="font-style:italic">"Imagination is more important than knowledge."</q></p>
            <address style="font-style:italic;color:#555;margin-top:20px">
                Written by <a href="#" style="color:#667eea">John Doe</a><br>
                123 Main St, City, Country
            </address>
        </div>`
    },

    'html-ul': {
        title: 'Unordered Lists',
        language: 'HTML',
        description: 'Unordered lists (<ul>) display items with bullet points. Use them when the order of items doesn\'t matter.',
        code: `<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
</ul>

<!-- Custom styling -->
<ul style="list-style-type: square;">
    <li>Square bullets</li>
    <li>Another item</li>
</ul>

<ul style="list-style-type: circle;">
    <li>Circle bullets</li>
    <li>Another item</li>
</ul>`,
        output: `<div style="padding:20px">
            <ul style="padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">HTML</li>
                <li style="margin:8px 0">CSS</li>
                <li style="margin:8px 0">JavaScript</li>
                <li style="margin:8px 0">React</li>
            </ul>
            <p style="margin:15px 0;font-weight:600">Different bullet styles:</p>
            <ul style="list-style-type:square;padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">Square bullets</li>
                <li style="margin:8px 0">Another item</li>
            </ul>
            <ul style="list-style-type:circle;padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">Circle bullets</li>
                <li style="margin:8px 0">Another item</li>
            </ul>
        </div>`
    },

    'html-ol': {
        title: 'Ordered Lists',
        language: 'HTML',
        description: 'Ordered lists (<ol>) display items with numbers. Use them when the sequence matters, like steps in a tutorial.',
        code: `<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
    <li>Final step</li>
</ol>

<!-- Start from different number -->
<ol start="5">
    <li>This is item 5</li>
    <li>This is item 6</li>
</ol>

<!-- Different numbering types -->
<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
</ol>

<ol type="i">
    <li>Item i</li>
    <li>Item ii</li>
</ol>`,
        output: `<div style="padding:20px">
            <ol style="padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">First step</li>
                <li style="margin:8px 0">Second step</li>
                <li style="margin:8px 0">Third step</li>
                <li style="margin:8px 0">Final step</li>
            </ol>
            <p style="margin:15px 0;font-weight:600">Start from 5:</p>
            <ol start="5" style="padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">This is item 5</li>
                <li style="margin:8px 0">This is item 6</li>
            </ol>
            <p style="margin:15px 0;font-weight:600">Uppercase letters:</p>
            <ol type="A" style="padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">Item A</li>
                <li style="margin:8px 0">Item B</li>
            </ol>
            <p style="margin:15px 0;font-weight:600">Roman numerals:</p>
            <ol type="i" style="padding-left:25px;margin:10px 0">
                <li style="margin:8px 0">Item i</li>
                <li style="margin:8px 0">Item ii</li>
            </ol>
        </div>`,
        notes: 'Type attribute options: "1" (numbers), "A" (uppercase), "a" (lowercase), "I" (uppercase Roman), "i" (lowercase Roman)'
    },

    'html-dl': {
        title: 'Description Lists',
        language: 'HTML',
        description: 'Description lists display term-description pairs. Perfect for glossaries, metadata, or any key-value content.',
        code: `<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the standard markup language for web pages</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets - describes how HTML elements are displayed</dd>

    <dt>JavaScript</dt>
    <dd>Programming language for web interactivity</dd>
    <dd>Can run on both client and server (Node.js)</dd>
</dl>`,
        output: `<div style="padding:20px">
            <dl>
                <dt style="font-weight:700;margin-top:15px;color:#667eea">HTML</dt>
                <dd style="margin-left:30px;margin-bottom:10px;color:#555">HyperText Markup Language - the standard markup language for web pages</dd>

                <dt style="font-weight:700;margin-top:15px;color:#667eea">CSS</dt>
                <dd style="margin-left:30px;margin-bottom:10px;color:#555">Cascading Style Sheets - describes how HTML elements are displayed</dd>

                <dt style="font-weight:700;margin-top:15px;color:#667eea">JavaScript</dt>
                <dd style="margin-left:30px;margin-bottom:10px;color:#555">Programming language for web interactivity</dd>
                <dd style="margin-left:30px;margin-bottom:10px;color:#555">Can run on both client and server (Node.js)</dd>
            </dl>
        </div>`,
        notes: '<dt> = definition term, <dd> = definition description. Multiple <dd> elements can follow a single <dt>.'
    },

    'html-nested': {
        title: 'Nested Lists',
        language: 'HTML',
        description: 'Lists can be nested inside each other to create hierarchical structures. Great for multi-level navigation or complex outlines.',
        code: `<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS
                <ul>
                    <li>Flexbox</li>
                    <li>Grid</li>
                    <li>Tailwind</li>
                </ul>
            </li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend
        <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>FastAPI</li>
        </ul>
    </li>
</ul>`,
        output: `<div style="padding:20px">
            <ul style="padding-left:25px">
                <li style="margin:8px 0"><strong>Frontend</strong>
                    <ul style="padding-left:25px;margin-top:8px">
                        <li style="margin:6px 0">HTML</li>
                        <li style="margin:6px 0"><strong>CSS</strong>
                            <ul style="padding-left:25px;margin-top:6px;list-style-type:circle">
                                <li style="margin:4px 0">Flexbox</li>
                                <li style="margin:4px 0">Grid</li>
                                <li style="margin:4px 0">Tailwind</li>
                            </ul>
                        </li>
                        <li style="margin:6px 0">JavaScript</li>
                    </ul>
                </li>
                <li style="margin:8px 0"><strong>Backend</strong>
                    <ul style="padding-left:25px;margin-top:8px">
                        <li style="margin:6px 0">Node.js</li>
                        <li style="margin:6px 0">Python</li>
                        <li style="margin:6px 0">FastAPI</li>
                    </ul>
                </li>
            </ul>
        </div>`
    },

    'html-links': {
        title: 'Anchor Tags (Links)',
        language: 'HTML',
        description: 'Links connect web pages together. The <a> tag with href attribute creates clickable links to other pages, files, or locations.',
        code: `<!-- External link -->
<a href="https://example.com">Visit Example.com</a>

<!-- Link to another page on same site -->
<a href="/about.html">About Us</a>

<!-- Link with title (tooltip) -->
<a href="https://github.com" title="Go to GitHub">
    GitHub
</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>

<!-- Link to phone number -->
<a href="tel:+1234567890">Call us: (123) 456-7890</a>

<!-- Link to email -->
<a href="mailto:user@example.com">Email Us</a>

<!-- Link with subject -->
<a href="mailto:user@example.com?subject=Hello&body=Message here">
    Email with subject
</a>`,
        output: `<div style="padding:20px;line-height:2.5">
            <p><a href="https://example.com" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea" target="_blank">Visit Example.com</a> - External link</p>
            <p><a href="#" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">About Us</a> - Internal link</p>
            <p><a href="https://github.com" title="Go to GitHub" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea" target="_blank">GitHub</a> - With tooltip (hover me)</p>
            <p><a href="#" download style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Download PDF</a> - Download link</p>
            <p><a href="tel:+1234567890" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Call us: (123) 456-7890</a> - Phone link</p>
            <p><a href="mailto:user@example.com" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Email Us</a> - Email link</p>
        </div>`,
        notes: 'Always include meaningful link text for accessibility. Avoid "click here" - use descriptive text like "View documentation".'
    },

    'html-targets': {
        title: 'Link Targets',
        language: 'HTML',
        description: 'The target attribute specifies where to open the linked document. Use it to control whether links open in new tabs or windows.',
        code: `<!-- Open in same tab (default) -->
<a href="page.html" target="_self">Same Tab</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    New Tab (Recommended for external links)
</a>

<!-- Open in parent frame -->
<a href="page.html" target="_parent">Parent Frame</a>

<!-- Open in topmost frame -->
<a href="page.html" target="_top">Top Frame</a>

<!-- Open in named frame -->
<a href="page.html" target="myframe">Named Frame</a>`,
        output: `<div style="padding:20px;line-height:2.5">
            <p><a href="#" target="_self" style="color:#667eea;padding:8px 16px;background:#f0f0ff;border-radius:6px;text-decoration:none;display:inline-block">Same Tab (_self)</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer" style="color:#667eea;padding:8px 16px;background:#f0f0ff;border-radius:6px;text-decoration:none;display:inline-block">New Tab (_blank) ↗</a></p>
            <p style="margin-top:15px;padding:15px;background:#fff7e6;border-left:4px solid #fa709a;border-radius:4px">
                <strong>Security Note:</strong> Always use <code>rel="noopener noreferrer"</code> with <code>target="_blank"</code> to prevent security vulnerabilities.
            </p>
        </div>`,
        notes: '<strong>Best Practice:</strong> Use target="_blank" sparingly. It can be confusing for users and impacts browser history.'
    },

    'html-jump': {
        title: 'Jump Links (Anchor Links)',
        language: 'HTML',
        description: 'Jump links allow users to navigate to specific sections within the same page. Create smooth scrolling navigation menus.',
        code: `<!-- Navigation with jump links -->
<nav>
    <a href="#section1">Go to Section 1</a> |
    <a href="#section2">Go to Section 2</a> |
    <a href="#section3">Go to Section 3</a>
</nav>

<!-- Target sections -->
<section id="section1">
    <h2>Section 1</h2>
    <p>Content for section 1...</p>
</section>

<section id="section2">
    <h2>Section 2</h2>
    <p>Content for section 2...</p>
</section>

<section id="section3">
    <h2>Section 3</h2>
    <p>Content for section 3...</p>
</section>

<!-- Back to top link -->
<a href="#top">↑ Back to Top</a>`,
        output: `<div style="padding:20px">
            <nav style="background:#f8f9fa;padding:15px;border-radius:8px;margin-bottom:20px">
                <a href="#demo1" style="color:#667eea;margin:0 10px;text-decoration:none;font-weight:600">Go to Section 1</a> |
                <a href="#demo2" style="color:#667eea;margin:0 10px;text-decoration:none;font-weight:600">Go to Section 2</a> |
                <a href="#demo3" style="color:#667eea;margin:0 10px;text-decoration:none;font-weight:600">Go to Section 3</a>
            </nav>
            <div id="demo1" style="padding:20px;background:#e8f0fe;border-radius:8px;margin:10px 0">
                <h3>Section 1</h3>
                <p>Content for section 1...</p>
            </div>
            <div id="demo2" style="padding:20px;background:#fef0e8;border-radius:8px;margin:10px 0">
                <h3>Section 2</h3>
                <p>Content for section 2...</p>
            </div>
            <div id="demo3" style="padding:20px;background:#e8fef0;border-radius:8px;margin:10px 0">
                <h3>Section 3</h3>
                <p>Content for section 3...</p>
            </div>
        </div>`,
        notes: 'Add <code>scroll-behavior: smooth;</code> to CSS for smooth scrolling between sections.'
    },

    'html-email': {
        title: 'Email & Phone Links',
        language: 'HTML',
        description: 'Special link protocols make it easy for users to send emails or make phone calls directly from your website.',
        code: `<!-- Basic email link -->
<a href="mailto:contact@example.com">Email Us</a>

<!-- Email with subject -->
<a href="mailto:support@example.com?subject=Support Request">
    Contact Support
</a>

<!-- Email with subject and body -->
<a href="mailto:info@example.com?subject=Inquiry&body=Hello, I would like to know more about...">
    Send Inquiry
</a>

<!-- Email with CC and BCC -->
<a href="mailto:main@example.com?cc=copy@example.com&bcc=hidden@example.com&subject=Meeting">
    Schedule Meeting
</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call: (123) 456-7890</a>

<!-- SMS link -->
<a href="sms:+1234567890">Text Us</a>

<!-- SMS with pre-filled message -->
<a href="sms:+1234567890?body=Hello, I'm interested in your services">
    Send SMS
</a>`,
        output: `<div style="padding:20px;line-height:2.5">
            <p>📧 <a href="mailto:contact@example.com" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Email Us</a></p>
            <p>📧 <a href="mailto:support@example.com?subject=Support Request" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Contact Support</a> (with subject)</p>
            <p>📧 <a href="mailto:info@example.com?subject=Inquiry&body=Hello" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Send Inquiry</a> (with subject & body)</p>
            <p>📞 <a href="tel:+1234567890" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Call: (123) 456-7890</a></p>
            <p>💬 <a href="sms:+1234567890" style="color:#667eea;text-decoration:none;border-bottom:2px solid #667eea">Text Us</a></p>
        </div>`,
        notes: 'Phone and SMS links work on mobile devices. They\'ll open the native phone or messaging app.'
    },

'html-form-basic': {
        title: 'Basic Forms',
        language: 'HTML',
        description: 'Forms collect user input and send it to a server. The form element wraps all input elements and defines where and how to send data.',
        code: `<form action="/submit" method="POST">
    <!-- Text input -->
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <br><br>

    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br><br>

    <!-- Email input (with validation) -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>

    <!-- Submit button -->
    <button type="submit">Sign Up</button>

    <!-- Reset button -->
    <button type="reset">Clear Form</button>
</form>`,
        output: `<form style="background:#f8f9fa;padding:30px;border-radius:12px;max-width:400px">
            <div style="margin-bottom:20px">
                <label for="demo-username" style="display:block;margin-bottom:8px;font-weight:600;color:#333">Username:</label>
                <input type="text" id="demo-username" required style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px;font-size:14px">
            </div>
            <div style="margin-bottom:20px">
                <label for="demo-password" style="display:block;margin-bottom:8px;font-weight:600;color:#333">Password:</label>
                <input type="password" id="demo-password" required style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px;font-size:14px">
            </div>
            <div style="margin-bottom:20px">
                <label for="demo-email" style="display:block;margin-bottom:8px;font-weight:600;color:#333">Email:</label>
                <input type="email" id="demo-email" required style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px;font-size:14px">
            </div>
            <div style="display:flex;gap:10px">
                <button type="button" style="flex:1;background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:12px;border:none;border-radius:8px;font-weight:700;cursor:pointer">Sign Up</button>
                <button type="reset" style="background:#e0e0e0;color:#333;padding:12px 20px;border:none;border-radius:8px;font-weight:600;cursor:pointer">Clear</button>
            </div>
        </form>`,
        notes: '<strong>Form Attributes:</strong><br>• <code>action</code>: Where to send form data<br>• <code>method</code>: How to send (GET or POST)<br>• <code>required</code>: Makes field mandatory<br>• Always use labels for accessibility'
    },

    'html-inputs': {
        title: 'Input Types',
        language: 'HTML',
        description: 'HTML5 provides many specialized input types with built-in validation. They adapt to the device (e.g., numeric keyboard on mobile for number inputs).',
        code: `<!-- Text inputs -->
<input type="text" placeholder="Text">
<input type="email" placeholder="Email">
<input type="password" placeholder="Password">
<input type="tel" placeholder="Phone">
<input type="url" placeholder="URL">
<input type="search" placeholder="Search">

<!-- Numbers and ranges -->
<input type="number" min="0" max="100" step="5" value="50">
<input type="range" min="0" max="100" value="50">

<!-- Date and time -->
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">

<!-- Selection -->
<input type="checkbox" id="agree">
<label for="agree">I agree</label>

<input type="radio" name="size" value="small" id="small">
<label for="small">Small</label>

<!-- Files and colors -->
<input type="file">
<input type="color" value="#667eea">

<!-- Buttons -->
<input type="submit" value="Submit">
<input type="reset" value="Reset">
<input type="button" value="Click Me">`,
        interactive: `
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;padding:20px">
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Text Input:</label>
                    <input type="text" placeholder="Enter text..." style="width:100%;padding:10px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Email Input:</label>
                    <input type="email" placeholder="you@example.com" style="width:100%;padding:10px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Number Input:</label>
                    <input type="number" min="0" max="100" value="50" style="width:100%;padding:10px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Range Slider:</label>
                    <input type="range" min="0" max="100" value="50" style="width:100%">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Date Picker:</label>
                    <input type="date" style="width:100%;padding:10px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Color Picker:</label>
                    <input type="color" value="#667eea" style="width:100%;height:45px;border:2px solid #e0e0e0;border-radius:8px;cursor:pointer">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">File Upload:</label>
                    <input type="file" style="width:100%;padding:10px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div>
                    <label style="display:block;margin-bottom:8px;font-weight:600">Checkbox:</label>
                    <label style="display:flex;align-items:center;gap:10px;cursor:pointer">
                        <input type="checkbox" style="width:20px;height:20px;cursor:pointer">
                        <span>I agree to terms</span>
                    </label>
                </div>
            </div>
        `,
        notes: 'Using the right input type provides better UX, mobile keyboard optimization, and built-in validation.'
    },

    // Continue with remaining HTML examples...
    // (Due to length, I'll add key examples for other categories)

    'html-table-basic': {
        title: 'Basic Tables',
        language: 'HTML',
        description: 'Tables organize data in rows and columns. Use <table>, <tr> for rows, <th> for headers, and <td> for data cells.',
        code: `<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
            <td>Developer</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>London</td>
            <td>Designer</td>
        </tr>
        <tr>
            <td>Bob Johnson</td>
            <td>35</td>
            <td>Tokyo</td>
            <td>Manager</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total: 3 employees</td>
        </tr>
    </tfoot>
</table>`,
        output: `<table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
            <thead>
                <tr style="background:linear-gradient(135deg,#667eea,#764ba2);color:white">
                    <th style="padding:15px;text-align:left;font-weight:700">Name</th>
                    <th style="padding:15px;text-align:left;font-weight:700">Age</th>
                    <th style="padding:15px;text-align:left;font-weight:700">City</th>
                    <th style="padding:15px;text-align:left;font-weight:700">Occupation</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom:1px solid #e0e0e0">
                    <td style="padding:15px">John Doe</td>
                    <td style="padding:15px">30</td>
                    <td style="padding:15px">New York</td>
                    <td style="padding:15px">Developer</td>
                </tr>
                <tr style="border-bottom:1px solid #e0e0e0;background:#f8f9fa">
                    <td style="padding:15px">Jane Smith</td>
                    <td style="padding:15px">25</td>
                    <td style="padding:15px">London</td>
                    <td style="padding:15px">Designer</td>
                </tr>
                <tr style="border-bottom:1px solid #e0e0e0">
                    <td style="padding:15px">Bob Johnson</td>
                    <td style="padding:15px">35</td>
                    <td style="padding:15px">Tokyo</td>
                    <td style="padding:15px">Manager</td>
                </tr>
            </tbody>
            <tfoot>
                <tr style="background:#f0f0f0;font-weight:700">
                    <td colspan="4" style="padding:15px">Total: 3 employees</td>
                </tr>
            </tfoot>
        </table>`,
        notes: 'Use <thead>, <tbody>, <tfoot> for better semantics and styling options.'
    },

    'html-form-validation': {
        title: 'Form Validation',
        language: 'HTML',
        description: 'HTML5 provides built-in validation using attributes like required, minlength, pattern, min, and max.',
        code: `<form>
    <label>Email:</label>
    <input type="email" required placeholder="you@example.com">

    <label>Password:</label>
    <input type="password" required minlength="8">

    <label>Age:</label>
    <input type="number" min="18" max="120" required>

    <label>Username:</label>
    <input type="text" pattern="[A-Za-z0-9]{4,12}" required>

    <button type="submit">Submit</button>
</form>`,
        output: `<form style="display:grid;gap:12px;max-width:420px;background:#f8f9fa;padding:20px;border-radius:12px">
            <input type="email" required placeholder="Email (required)" style="padding:10px;border:2px solid #dfe3ff;border-radius:8px">
            <input type="password" required minlength="8" placeholder="Password (min 8 chars)" style="padding:10px;border:2px solid #dfe3ff;border-radius:8px">
            <input type="number" min="18" max="120" placeholder="Age (18-120)" style="padding:10px;border:2px solid #dfe3ff;border-radius:8px">
            <input type="text" pattern="[A-Za-z0-9]{4,12}" placeholder="Username (4-12 chars)" style="padding:10px;border:2px solid #dfe3ff;border-radius:8px">
            <button type="button" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:10px 14px;border-radius:8px;font-weight:700">Submit</button>
        </form>`,
        notes: 'Use browser validation for first-line checks, and always validate again on the server.'
    },

    'html-form-advanced': {
        title: 'Advanced Forms',
        language: 'HTML',
        description: 'Combine select dropdowns, radio buttons, checkboxes, textarea, and grouped fields for complete form UX.',
        code: `<form>
    <fieldset>
        <legend>Profile</legend>
        <label>Country:</label>
        <select required>
            <option value="">Choose country</option>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
        </select>

        <p>Plan:</p>
        <label><input type="radio" name="plan" value="basic"> Basic</label>
        <label><input type="radio" name="plan" value="pro"> Pro</label>

        <p>Interests:</p>
        <label><input type="checkbox" value="frontend"> Frontend</label>
        <label><input type="checkbox" value="backend"> Backend</label>

        <label>Bio:</label>
        <textarea rows="4" placeholder="Tell us about yourself"></textarea>
    </fieldset>
</form>`,
        output: `<div style="display:grid;gap:10px;max-width:460px;background:#f8f9fa;padding:20px;border-radius:12px">
            <select style="padding:10px;border:2px solid #dfe3ff;border-radius:8px">
                <option>Choose country</option>
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
            </select>
            <div>
                <label style="margin-right:12px"><input type="radio" name="demo-plan"> Basic</label>
                <label><input type="radio" name="demo-plan"> Pro</label>
            </div>
            <div>
                <label style="margin-right:12px"><input type="checkbox"> Frontend</label>
                <label><input type="checkbox"> Backend</label>
            </div>
            <textarea rows="3" style="padding:10px;border:2px solid #dfe3ff;border-radius:8px" placeholder="Bio"></textarea>
        </div>`,
        notes: 'Use fieldset/legend for accessibility when grouping related form controls.'
    },

    'html-table-sections': {
        title: 'Table Sections',
        language: 'HTML',
        description: 'Use <thead>, <tbody>, and <tfoot> to structure table content for readability and styling.',
        code: `<table>
    <thead>
        <tr><th>Product</th><th>Price</th></tr>
    </thead>
    <tbody>
        <tr><td>Laptop</td><td>$1200</td></tr>
        <tr><td>Mouse</td><td>$25</td></tr>
    </tbody>
    <tfoot>
        <tr><td>Total</td><td>$1225</td></tr>
    </tfoot>
</table>`,
        output: `<table style="width:100%;border-collapse:collapse;background:#fff">
            <thead><tr style="background:#667eea;color:#fff"><th style="padding:10px;text-align:left">Product</th><th style="padding:10px;text-align:left">Price</th></tr></thead>
            <tbody><tr><td style="padding:10px;border-bottom:1px solid #eee">Laptop</td><td style="padding:10px;border-bottom:1px solid #eee">$1200</td></tr><tr><td style="padding:10px;border-bottom:1px solid #eee">Mouse</td><td style="padding:10px;border-bottom:1px solid #eee">$25</td></tr></tbody>
            <tfoot><tr style="background:#f3f5ff;font-weight:700"><td style="padding:10px">Total</td><td style="padding:10px">$1225</td></tr></tfoot>
        </table>`
    },

    'html-table-span': {
        title: 'Colspan & Rowspan',
        language: 'HTML',
        description: 'Merge cells across columns using colspan and across rows using rowspan.',
        code: `<table border="1">
    <tr>
        <th>Name</th>
        <th colspan="2">Contact</th>
    </tr>
    <tr>
        <td rowspan="2">John</td>
        <td>Email</td>
        <td>john@example.com</td>
    </tr>
    <tr>
        <td>Phone</td>
        <td>+1 111 222 3333</td>
    </tr>
</table>`,
        output: `<table style="width:100%;border-collapse:collapse;background:#fff">
            <tr><th style="padding:10px;border:1px solid #ddd">Name</th><th colspan="2" style="padding:10px;border:1px solid #ddd">Contact</th></tr>
            <tr><td rowspan="2" style="padding:10px;border:1px solid #ddd">John</td><td style="padding:10px;border:1px solid #ddd">Email</td><td style="padding:10px;border:1px solid #ddd">john@example.com</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd">Phone</td><td style="padding:10px;border:1px solid #ddd">+1 111 222 3333</td></tr>
        </table>`
    },

    'html-table-styled': {
        title: 'Styled Tables',
        language: 'HTML',
        description: 'Apply modern styling with alternating rows, spacing, and hover effects for readability.',
        code: `table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    padding: 12px;
    border-bottom: 1px solid #eee;
}
tbody tr:nth-child(even) {
    background: #f8f9fa;
}
tbody tr:hover {
    background: #eef2ff;
}`,
        output: `<table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden">
            <thead><tr style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff"><th style="padding:12px;text-align:left">Name</th><th style="padding:12px;text-align:left">Role</th></tr></thead>
            <tbody>
                <tr style="border-bottom:1px solid #eee"><td style="padding:12px">Ava</td><td style="padding:12px">Frontend</td></tr>
                <tr style="border-bottom:1px solid #eee;background:#f8f9fa"><td style="padding:12px">Noah</td><td style="padding:12px">Backend</td></tr>
                <tr><td style="padding:12px">Mia</td><td style="padding:12px">Designer</td></tr>
            </tbody>
        </table>`
    },

    'html-images': {
        title: 'Images',
        language: 'HTML',
        description: 'Use <img> with alt text for accessibility, and width/height to reduce layout shift.',
        code: `<img src="photo.jpg" alt="A mountain landscape" width="600" height="400">

<figure>
    <img src="chart.png" alt="Sales chart for Q1" width="480" height="280">
    <figcaption>Quarterly sales trend</figcaption>
</figure>

<!-- Responsive image -->
<img src="hero.jpg" alt="Hero banner" style="max-width:100%;height:auto;">`,
        output: `<div style="display:grid;gap:10px">
            <img alt="Placeholder landscape" src="https://picsum.photos/640/280" style="width:100%;max-width:640px;border-radius:10px;display:block">
            <div style="font-size:.85em;color:#666">Always include meaningful <code>alt</code> text.</div>
        </div>`
    },

    'html-audio': {
        title: 'Audio',
        language: 'HTML',
        description: 'Embed audio with native playback controls using the <audio> element.',
        code: `<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>`,
        output: `<div style="background:#f8f9fa;padding:16px;border-radius:10px">
            <audio controls style="width:100%">
                <source src="" type="audio/mpeg">
            </audio>
            <p style="margin-top:10px;color:#666;font-size:.85em">Provide multiple formats for broader browser support.</p>
        </div>`
    },

    'html-video': {
        title: 'Video',
        language: 'HTML',
        description: 'Embed video content using <video> with controls, poster image, and fallback text.',
        code: `<video controls width="640" height="360" poster="preview.jpg">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support the video tag.
</video>`,
        output: `<div style="background:#f8f9fa;padding:16px;border-radius:10px">
            <video controls style="width:100%;max-width:640px;border-radius:8px">
                <source src="" type="video/mp4">
            </video>
            <p style="margin-top:10px;color:#666;font-size:.85em">Use captions/subtitles tracks for accessibility.</p>
        </div>`
    },

    'html-iframe': {
        title: 'iFrames',
        language: 'HTML',
        description: 'Use iframes to embed another webpage or media. Always set title and allow attributes as needed.',
        code: `<iframe
    src="https://example.com"
    title="Embedded content"
    width="600"
    height="340"
    loading="lazy"
    referrerpolicy="no-referrer"
    allowfullscreen>
</iframe>`,
        output: `<div style="background:#f8f9fa;padding:16px;border-radius:10px">
            <iframe src="https://example.com" title="Example site" style="width:100%;max-width:640px;height:260px;border:1px solid #ddd;border-radius:8px"></iframe>
        </div>`,
        notes: 'For security, restrict capabilities using sandbox when possible.'
    },

    'html-semantic-structure': {
        title: 'Semantic Structure',
        language: 'HTML',
        description: 'Use semantic layout elements so browsers, search engines, and assistive tech understand page structure.',
        code: `<header>Site Header</header>
<nav>Main Navigation</nav>
<main>
    <section>
        <article>Primary content</article>
    </section>
    <aside>Related links</aside>
</main>
<footer>Site Footer</footer>`,
        output: `<div style="display:grid;gap:8px">
            <div style="padding:10px;background:#eef2ff;border-radius:8px">header</div>
            <div style="padding:10px;background:#f3f5ff;border-radius:8px">nav</div>
            <div style="padding:10px;background:#fff;border:1px solid #e5e7eb;border-radius:8px">main > section/article + aside</div>
            <div style="padding:10px;background:#eef2ff;border-radius:8px">footer</div>
        </div>`
    },

    'html-article': {
        title: 'Article & Section',
        language: 'HTML',
        description: 'Use <article> for standalone content and <section> for grouped thematic content.',
        code: `<section>
    <h2>Web Development</h2>
    <article>
        <h3>Why semantic HTML matters</h3>
        <p>Articles are self-contained and reusable.</p>
    </article>
    <article>
        <h3>Accessibility benefits</h3>
        <p>Screen readers can navigate better.</p>
    </article>
</section>`,
        output: `<section style="background:#f8f9fa;padding:14px;border-radius:10px">
            <h3 style="margin:0 0 10px">Web Development</h3>
            <article style="background:#fff;padding:10px;border-radius:8px;margin-bottom:8px">Article 1</article>
            <article style="background:#fff;padding:10px;border-radius:8px">Article 2</article>
        </section>`
    },

    'html-figure': {
        title: 'Figure & Figcaption',
        language: 'HTML',
        description: 'Use <figure> for self-contained media and <figcaption> for its caption.',
        code: `<figure>
    <img src="diagram.png" alt="System architecture diagram">
    <figcaption>Figure 1: High-level architecture.</figcaption>
</figure>`,
        output: `<figure style="margin:0;max-width:640px">
            <img src="https://picsum.photos/640/260" alt="Sample visual" style="width:100%;display:block;border-radius:10px">
            <figcaption style="margin-top:8px;color:#666;font-size:.85em">Figure 1: Example caption text.</figcaption>
        </figure>`
    },

    'html-details': {
        title: 'Details & Summary',
        language: 'HTML',
        description: 'Create native collapsible content with <details> and <summary> without JavaScript.',
        code: `<details>
    <summary>What is semantic HTML?</summary>
    <p>Semantic HTML uses meaningful tags that describe content structure.</p>
</details>`,
        output: `<details style="background:#f8f9fa;padding:12px;border-radius:10px">
            <summary style="cursor:pointer;font-weight:700">What is semantic HTML?</summary>
            <p style="margin-top:8px;color:#555">Semantic HTML uses meaningful tags that describe content structure.</p>
        </details>`
    },

    // ============================================
    // TAILWIND CSS EXAMPLES
    // ============================================

    'tw-setup': {
        title: 'Tailwind CSS Setup',
        language: 'HTML',
        description: 'Get started with Tailwind CSS quickly using the CDN for prototyping, or install via npm for production projects.',
        code: `<!-- Method 1: CDN (for quick prototyping) -->
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="bg-blue-500 text-white p-4">
        Tailwind is working!
    </div>
</body>
</html>

<!-- Method 2: NPM Installation (for production) -->`,
        notes: `<strong>NPM Installation Steps:</strong><br>
<code>npm install -D tailwindcss</code><br>
<code>npx tailwindcss init</code><br>
<br>
<strong>Configure tailwind.config.js:</strong><br>
<code>content: ["./src/**/*.{html,js}"]</code><br>
<br>
<strong>Add directives to CSS:</strong><br>
<code>@tailwind base;</code><br>
<code>@tailwind components;</code><br>
<code>@tailwind utilities;</code>`
    },

    'tw-flexbox': {
        title: 'Flexbox with Tailwind',
        language: 'HTML',
        description: 'Tailwind provides intuitive flexbox utilities. Use flex container classes and control alignment, direction, and spacing with simple class names.',
        code: `<!-- Basic flex container -->
<div class="flex">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- Flex direction -->
<div class="flex flex-row">Horizontal (default)</div>
<div class="flex flex-col">Vertical</div>
<div class="flex flex-row-reverse">Reverse horizontal</div>

<!-- Justify content (main axis) -->
<div class="flex justify-start">Start</div>
<div class="flex justify-center">Center</div>
<div class="flex justify-end">End</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-around">Space around</div>
<div class="flex justify-evenly">Space evenly</div>

<!-- Align items (cross axis) -->
<div class="flex items-start">Align start</div>
<div class="flex items-center">Align center</div>
<div class="flex items-end">Align end</div>
<div class="flex items-stretch">Stretch</div>

<!-- Flex wrap -->
<div class="flex flex-wrap">Wrap items</div>
<div class="flex flex-nowrap">No wrap</div>

<!-- Gap between items -->
<div class="flex gap-4">Gap of 1rem (16px)</div>
<div class="flex gap-x-4 gap-y-2">Different x and y gaps</div>

<!-- Flex grow and shrink -->
<div class="flex">
    <div class="flex-1">Grows to fill space</div>
    <div class="flex-none">Doesn't grow</div>
</div>`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <div style="margin-bottom:30px">
                    <h4 style="margin-bottom:15px;font-weight:700;color:#333">justify-between:</h4>
                    <div style="display:flex;justify-content:space-between;padding:20px;background:#f0f0ff;border-radius:8px">
                        <div style="padding:15px;background:#667eea;color:white;border-radius:8px;font-weight:600">Item 1</div>
                        <div style="padding:15px;background:#667eea;color:white;border-radius:8px;font-weight:600">Item 2</div>
                        <div style="padding:15px;background:#667eea;color:white;border-radius:8px;font-weight:600">Item 3</div>
                    </div>
                </div>
                <div style="margin-bottom:30px">
                    <h4 style="margin-bottom:15px;font-weight:700;color:#333">justify-center items-center:</h4>
                    <div style="display:flex;justify-content:center;align-items:center;height:150px;padding:20px;background:#f0f0ff;border-radius:8px">
                        <div style="padding:20px 40px;background:#764ba2;color:white;border-radius:8px;font-weight:600;font-size:18px">Centered</div>
                    </div>
                </div>
                <div>
                    <h4 style="margin-bottom:15px;font-weight:700;color:#333">gap-4:</h4>
                    <div style="display:flex;gap:16px;flex-wrap:wrap;padding:20px;background:#f0f0ff;border-radius:8px">
                        <div style="padding:15px 20px;background:#667eea;color:white;border-radius:8px;font-weight:600">Box 1</div>
                        <div style="padding:15px 20px;background:#667eea;color:white;border-radius:8px;font-weight:600">Box 2</div>
                        <div style="padding:15px 20px;background:#667eea;color:white;border-radius:8px;font-weight:600">Box 3</div>
                        <div style="padding:15px 20px;background:#667eea;color:white;border-radius:8px;font-weight:600">Box 4</div>
                    </div>
                </div>
            </div>
        `,
        notes: 'Flexbox is perfect for one-dimensional layouts. Use Grid for two-dimensional layouts.'
    },

    'tw-grid': {
        title: 'Grid with Tailwind',
        language: 'HTML',
        description: 'CSS Grid is powerful for two-dimensional layouts. Tailwind makes it easy with grid-cols and gap utilities.',
        code: `<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>

<!-- Grid with different column sizes -->
<div class="grid grid-cols-12 gap-4">
    <div class="col-span-8">Main content (8 columns)</div>
    <div class="col-span-4">Sidebar (4 columns)</div>
</div>

<!-- Auto-fit columns -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
    <div>Auto-sized</div>
    <div>Auto-sized</div>
    <div>Auto-sized</div>
</div>

<!-- Grid rows -->
<div class="grid grid-rows-3 gap-4 h-64">
    <div>Row 1</div>
    <div>Row 2</div>
    <div>Row 3</div>
</div>

<!-- Grid template areas (custom) -->
<div class="grid gap-4"
     style="grid-template-areas: 'header header header'
                                 'sidebar main main'
                                 'footer footer footer';">
    <div style="grid-area: header;">Header</div>
    <div style="grid-area: sidebar;">Sidebar</div>
    <div style="grid-area: main;">Main</div>
    <div style="grid-area: footer;">Footer</div>
</div>`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <h4 style="margin-bottom:15px;font-weight:700;color:#333">grid-cols-4 gap-4:</h4>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:30px">
                    <div style="padding:30px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:8px;text-align:center;font-weight:600">1</div>
                    <div style="padding:30px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:8px;text-align:center;font-weight:600">2</div>
                    <div style="padding:30px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:8px;text-align:center;font-weight:600">3</div>
                    <div style="padding:30px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:8px;text-align:center;font-weight:600">4</div>
                </div>
                <h4 style="margin-bottom:15px;font-weight:700;color:#333">grid-cols-12 with col-span:</h4>
                <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:16px">
                    <div style="grid-column:span 8;padding:30px;background:#667eea;color:white;border-radius:8px;font-weight:600">Main (span 8)</div>
                    <div style="grid-column:span 4;padding:30px;background:#764ba2;color:white;border-radius:8px;font-weight:600">Sidebar (span 4)</div>
                </div>
            </div>
        `,
        notes: 'Grid is best for complex 2D layouts. For simple stacking, use Flexbox. Combine both for maximum power!'
    },

    'tw-buttons': {
        title: 'Button Components',
        language: 'HTML',
        description: 'Create beautiful, accessible buttons with Tailwind utility classes. Add hover states, sizes, and variations easily.',
        code: `<!-- Primary button -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Primary Button
</button>

<!-- Secondary button -->
<button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
    Secondary
</button>

<!-- Outline button -->
<button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition">
    Outline
</button>

<!-- Success button -->
<button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
    Success
</button>

<!-- Danger button -->
<button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
    Danger
</button>

<!-- Button sizes -->
<button class="bg-blue-500 text-white font-bold py-1 px-2 text-sm rounded">
    Small
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
    Medium
</button>
<button class="bg-blue-500 text-white font-bold py-3 px-6 text-lg rounded">
    Large
</button>

<!-- Rounded variants -->
<button class="bg-blue-500 text-white font-bold py-2 px-4">
    Square
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
    Rounded
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
    Pill
</button>

<!-- With icon -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
    <span>Download</span>
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12l-5-5h10l-5 5z"/>
    </svg>
</button>

<!-- Disabled state -->
<button class="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
    Disabled
</button>

<!-- With shadow and transition -->
<button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
    Fancy Button
</button>`,
        interactive: `
            <div style="padding:30px;background:white;border-radius:12px;display:flex;flex-wrap:wrap;gap:15px;justify-content:center;align-items:center">
                <button style="background:#3b82f6;color:white;padding:10px 24px;border-radius:6px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#3b82f6'">Primary</button>
                <button style="background:#6b7280;color:white;padding:10px 24px;border-radius:6px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">Secondary</button>
                <button style="background:transparent;color:#3b82f6;padding:10px 24px;border-radius:6px;font-weight:700;border:2px solid #3b82f6;cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='#3b82f6';this.style.color='white'" onmouseout="this.style.background='transparent';this.style.color='#3b82f6'">Outline</button>
                <button style="background:#10b981;color:white;padding:10px 24px;border-radius:6px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">Success</button>
                <button style="background:#ef4444;color:white;padding:10px 24px;border-radius:6px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">Danger</button>
                <button style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:12px 30px;border-radius:10px;font-weight:700;border:none;cursor:pointer;box-shadow:0 10px 30px rgba(102,126,234,0.3);transition:all 0.3s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 15px 40px rgba(102,126,234,0.4)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 10px 30px rgba(102,126,234,0.3)'">Gradient Button</button>
            </div>
        `,
        notes: 'Use <code>focus:ring</code> utilities for accessibility. Example: <code>focus:ring-2 focus:ring-blue-500 focus:ring-offset-2</code>'
    },

    'tw-cards': {
        title: 'Card Components',
        language: 'HTML',
        description: 'Cards are versatile containers for grouping related content. Build them with background, padding, borders, and shadows.',
        code: `<!-- Basic card -->
<div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-600">Card content goes here...</p>
</div>

<!-- Card with image -->
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src="image.jpg" alt="Card image" class="w-full h-48 object-cover">
    <div class="p-6">
        <h3 class="text-2xl font-bold mb-2">Image Card</h3>
        <p class="text-gray-600 mb-4">Description text here...</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Learn More
        </button>
    </div>
</div>

<!-- Card with hover effect -->
<div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
    <h3 class="text-xl font-bold mb-2">Hover Me!</h3>
    <p class="text-gray-600">Shadow grows on hover</p>
</div>

<!-- Horizontal card -->
<div class="bg-white rounded-lg shadow-lg overflow-hidden flex">
    <img src="image.jpg" class="w-48 h-48 object-cover">
    <div class="p-6">
        <h3 class="text-2xl font-bold mb-2">Horizontal Card</h3>
        <p class="text-gray-600">Side-by-side layout</p>
    </div>
</div>

<!-- Card with gradient background -->
<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white">
    <h3 class="text-2xl font-bold mb-2">Gradient Card</h3>
    <p class="opacity-90">Beautiful gradient background</p>
</div>

<!-- Card grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow-md p-6">Card 1</div>
    <div class="bg-white rounded-lg shadow-md p-6">Card 2</div>
    <div class="bg-white rounded-lg shadow-md p-6">Card 3</div>
</div>`,
        interactive: `
            <div style="padding:20px;background:#fafbfc;border-radius:12px">
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">
                    <div style="background:white;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.1);overflow:hidden;transition:all 0.3s" onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 12px 30px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)'">
                        <div style="height:150px;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
                        <div style="padding:20px">
                            <h3 style="font-size:1.3em;font-weight:800;margin-bottom:10px;color:#1a1a2e">Beautiful Card</h3>
                            <p style="color:#666;margin-bottom:15px">Hover over me to see the lift effect!</p>
                            <button style="background:#667eea;color:white;padding:8px 20px;border-radius:6px;border:none;font-weight:600;cursor:pointer">Learn More</button>
                        </div>
                    </div>
                    <div style="background:linear-gradient(135deg,#f093fb,#f5576c);border-radius:12px;box-shadow:0 8px 25px rgba(240,147,251,0.3);padding:25px;color:white">
                        <h3 style="font-size:1.3em;font-weight:800;margin-bottom:10px">Gradient Card</h3>
                        <p style="opacity:0.95;margin-bottom:15px">Eye-catching gradient background</p>
                        <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);padding:15px;border-radius:8px">
                            <p style="font-weight:600">✨ Special Feature</p>
                        </div>
                    </div>
                    <div style="background:white;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.1);padding:25px;border:3px solid #e0e7ff">
                        <div style="width:50px;height:50px;background:#667eea;border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-size:1.5em;margin-bottom:15px">🚀</div>
                        <h3 style="font-size:1.3em;font-weight:800;margin-bottom:10px;color:#1a1a2e">Icon Card</h3>
                        <p style="color:#666">Perfect for feature highlights</p>
                    </div>
                </div>
            </div>
        `
    },

    'tw-config': {
        title: 'Configuration',
        language: 'JavaScript',
        description: 'Configure Tailwind by customizing theme tokens and extending utilities in tailwind.config.js.',
        code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb"
      },
      spacing: {
        18: "4.5rem"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};`,
        notes: 'Use `theme.extend` instead of overriding the full default theme.'
    },

    'tw-utilities': {
        title: 'Utility-First Concept',
        language: 'HTML',
        description: 'Compose UI directly in markup by combining many small utility classes.',
        code: `<button class="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
  Save Changes
</button>

<div class="max-w-md p-6 bg-white rounded-xl shadow-md border border-slate-200">
  <h3 class="text-xl font-bold text-slate-900 mb-2">Utility-first card</h3>
  <p class="text-slate-600 leading-relaxed">No custom CSS required for this component.</p>
</div>`,
        output: `<div style="padding:16px;background:#f8f9fa;border-radius:10px">Utility classes let you style fast without leaving HTML.</div>`
    },

    'tw-responsive': {
        title: 'Responsive Design',
        language: 'HTML',
        description: 'Use breakpoint prefixes like sm:, md:, lg:, xl: to adapt layouts by screen size.',
        code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="p-4 bg-indigo-100 rounded">1</div>
  <div class="p-4 bg-indigo-100 rounded">2</div>
  <div class="p-4 bg-indigo-100 rounded">3</div>
  <div class="p-4 bg-indigo-100 rounded">4</div>
</div>

<p class="text-sm md:text-base lg:text-lg">Text scales with breakpoint.</p>`,
        notes: 'Default breakpoints are mobile-first; unprefixed utilities apply to all sizes.'
    },

    'tw-spacing': {
        title: 'Spacing',
        language: 'HTML',
        description: 'Control margin, padding, and gaps with Tailwind spacing scale utilities.',
        code: `<div class="p-6 m-4 bg-white rounded-lg shadow">
  <h3 class="mb-3 text-lg font-bold">Spacing demo</h3>
  <p class="mb-4">Use p-*, m-*, px-*, py-*, mt-*, etc.</p>
  <div class="flex gap-3">
    <span class="px-3 py-1 bg-blue-100 rounded">gap-3</span>
    <span class="px-3 py-1 bg-blue-100 rounded">between items</span>
  </div>
</div>`
    },

    'tw-sizing': {
        title: 'Sizing',
        language: 'HTML',
        description: 'Set width/height with w-*, h-*, min/max constraints, and fraction-based sizing.',
        code: `<div class="w-full max-w-xl h-48 bg-slate-100 rounded-lg p-4">
  <div class="w-1/2 h-16 bg-blue-500 rounded mb-3"></div>
  <div class="w-1/3 h-16 bg-purple-500 rounded"></div>
</div>

<img class="w-32 h-32 object-cover rounded-full" src="avatar.jpg" alt="avatar">`
    },

    'tw-colors': {
        title: 'Colors',
        language: 'HTML',
        description: 'Use semantic color utilities for text, background, border, and states.',
        code: `<div class="space-y-3">
  <p class="text-slate-800">Primary text</p>
  <p class="text-slate-500">Muted text</p>
  <div class="p-3 bg-emerald-100 text-emerald-800 rounded">Success message</div>
  <div class="p-3 bg-rose-100 text-rose-800 rounded border border-rose-200">Error message</div>
</div>`
    },

    'tw-typography': {
        title: 'Typography',
        language: 'HTML',
        description: 'Control font size, weight, line-height, tracking, and text alignment with utilities.',
        code: `<article class="max-w-prose">
  <h1 class="text-3xl font-extrabold tracking-tight mb-3">Readable heading</h1>
  <p class="text-base leading-7 text-slate-700 mb-3">Balanced line-height improves readability.</p>
  <p class="text-sm uppercase tracking-wide text-slate-500">Meta label</p>
</article>`
    },

    'tw-borders': {
        title: 'Borders & Shadows',
        language: 'HTML',
        description: 'Use border, ring, radius, and shadow classes to define surfaces and depth.',
        code: `<div class="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">Subtle card</div>
<div class="p-6 rounded-2xl ring-2 ring-blue-500 shadow-lg bg-white mt-4">Focused state card</div>`
    },

    'tw-effects': {
        title: 'Effects & Filters',
        language: 'HTML',
        description: 'Apply blur, opacity, backdrop blur, and blend utilities for visual effects.',
        code: `<div class="relative p-8 rounded-xl overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-80"></div>
  <div class="relative bg-white/80 backdrop-blur-md p-4 rounded-lg shadow">
    Frosted glass panel
  </div>
</div>`
    },

    'tw-forms': {
        title: 'Forms',
        language: 'HTML',
        description: 'Build clean form controls with consistent spacing, border, and focus states.',
        code: `<form class="max-w-md space-y-4">
  <input class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email">
  <select class="w-full px-3 py-2 border border-slate-300 rounded-lg">
    <option>Choose role</option>
    <option>Frontend</option>
    <option>Backend</option>
  </select>
  <button class="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Submit</button>
</form>`
    },

    'tw-navigation': {
        title: 'Navigation',
        language: 'HTML',
        description: 'Create navigation bars and menus with flex and spacing utilities.',
        code: `<nav class="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
  <a class="font-extrabold text-slate-900" href="#">Brand</a>
  <div class="flex items-center gap-4 text-sm font-semibold text-slate-700">
    <a class="hover:text-blue-600" href="#">Docs</a>
    <a class="hover:text-blue-600" href="#">Pricing</a>
    <a class="hover:text-blue-600" href="#">Blog</a>
  </div>
</nav>`
    },

    'tw-hover': {
        title: 'Hover & States',
        language: 'HTML',
        description: 'Use pseudo-class prefixes like hover:, focus:, active:, disabled: to style interaction states.',
        code: `<button class="px-4 py-2 rounded bg-slate-900 text-white hover:bg-slate-700 active:scale-95 transition">
  Press me
</button>

<input class="border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Focus me">`
    },

    'tw-animations': {
        title: 'Animations',
        language: 'HTML',
        description: 'Use built-in animation utilities and transitions for motion.',
        code: `<div class="animate-pulse p-4 bg-slate-200 rounded mb-4">Loading skeleton</div>
<button class="px-4 py-2 rounded bg-indigo-600 text-white transition transform hover:-translate-y-1 hover:shadow-lg">
  Hover lift
</button>`
    },

    'tw-dark-mode': {
        title: 'Dark Mode',
        language: 'HTML',
        description: 'Enable dark mode with the `dark` variant and class strategy.',
        code: `<html class="dark">
<body class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  <div class="p-6 rounded-xl bg-slate-100 dark:bg-slate-800">
    Dark-mode aware component
  </div>
</body>
</html>`,
        notes: 'In config: `darkMode: "class"` lets you toggle theme by adding/removing the `dark` class.'
    },

    'tw-custom': {
        title: 'Custom Utilities',
        language: 'CSS',
        description: 'Add custom utility classes in your Tailwind layers when built-ins are not enough.',
        code: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0,0,0,.2);
  }
  .content-auto {
    content-visibility: auto;
  }
}`,
        notes: 'Prefer existing utilities first; add custom utilities only for repeated patterns.'
    },

    // ============================================
    // JAVASCRIPT EXAMPLES
    // ============================================

    'js-variables': {
        title: 'Variables (let, const, var)',
        language: 'JavaScript',
        description: 'JavaScript has three ways to declare variables. Use const by default, let when you need to reassign, and avoid var in modern code.',
        code: `// const - cannot be reassigned
const name = "John";
const age = 30;
// name = "Jane"; // ERROR: Cannot reassign const

// let - can be reassigned
let score = 0;
score = 100; // OK
score += 50; // OK

// var - old way (avoid in modern code)
var oldWay = "deprecated";

// Block scope with let and const
if (true) {
    const blockScoped = "only available here";
    let alsoBlockScoped = "me too";
    var notBlockScoped = "I leak out!";
}
// console.log(blockScoped); // ERROR
// console.log(alsoBlockScoped); // ERROR
console.log(notBlockScoped); // Works (but shouldn't!)

// Multiple declarations
const x = 1, y = 2, z = 3;
let a, b, c; // Undefined until assigned

// Naming conventions
const firstName = "John"; // camelCase
const MAXIMUM_SIZE = 100; // UPPER_CASE for constants
const user_name = "jane"; // snake_case (less common in JS)

// const with objects and arrays
const user = { name: "John" };
user.name = "Jane"; // OK - modifying properties
user.age = 30; // OK - adding properties
// user = {}; // ERROR - cannot reassign

const numbers = [1, 2, 3];
numbers.push(4); // OK - modifying array
// numbers = []; // ERROR - cannot reassign`,
        notes: `<strong>Best Practices:</strong><br>
• Use <code>const</code> by default<br>
• Use <code>let</code> only when you need to reassign<br>
• Never use <code>var</code> in modern JavaScript<br>
• <code>const</code> prevents reassignment, but objects/arrays can still be modified<br>
• Use meaningful, descriptive variable names`
    },

    'js-datatypes': {
        title: 'Data Types',
        language: 'JavaScript',
        description: 'JavaScript has dynamic typing - you don\'t declare types explicitly. The main primitive types are string, number, boolean, null, undefined, symbol, and bigint. Objects are the non-primitive type.',
        code: `// Primitive Types

// String
const name = "John";
const greeting = 'Hello';
const template = \`Hello \${name}\`; // Template literal
const multiline = \`Line 1
Line 2\`;

// Number (integers and decimals)
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 1e6; // 1000000

// Boolean
const isActive = true;
const isComplete = false;

// Null (intentional absence of value)
const empty = null;

// Undefined (variable declared but not assigned)
let notAssigned;
console.log(notAssigned); // undefined

// Symbol (unique identifier)
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2); // false - each symbol is unique

// BigInt (for very large integers)
const huge = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);

// Object Types

// Object
const person = {
    name: "John",
    age: 30,
    isActive: true
};

// Array
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, { id: 1 }];

// Function
function greet(name) {
    return \`Hello \${name}\`;
}

// Date
const now = new Date();
const birthday = new Date('1990-01-01');

// RegExp
const pattern = /[A-Z]+/g;

// Type checking
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (JavaScript quirk!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(Array.isArray([])); // true - proper way to check arrays

// Type conversion
const str = "123";
const num = Number(str); // 123
const str2 = String(42); // "42"
const bool = Boolean(1); // true

// Falsy values (convert to false)
// false, 0, -0, 0n, "", null, undefined, NaN

// Truthy values (everything else!)
// true, any non-zero number, any string, {}, [], etc.`,
        interactive: `
            <div id="type-checker" style="padding:20px;background:white;border-radius:12px">
                <h4 style="margin-bottom:15px;font-weight:700">Interactive Type Checker:</h4>
                <input type="text" id="type-input" placeholder="Enter a value..." style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px;margin-bottom:15px;font-family:monospace">
                <button onclick="checkType()" style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:10px 24px;border-radius:8px;border:none;font-weight:700;cursor:pointer;width:100%;margin-bottom:15px">Check Type</button>
                <div id="type-result" style="padding:15px;background:#f8f9fa;border-radius:8px;font-family:monospace;min-height:60px"></div>
            </div>
            <script>
                function checkType() {
                    const input = document.getElementById('type-input').value;
                    const result = document.getElementById('type-result');

                    let value;
                    let typeInfo = '';

                    try {
                        value = eval(input);
                        typeInfo += '<strong>Value:</strong> ' + JSON.stringify(value) + '<br>';
                        typeInfo += '<strong>Type:</strong> ' + typeof value + '<br>';
                        typeInfo += '<strong>Is Array:</strong> ' + Array.isArray(value) + '<br>';
                        typeInfo += '<strong>Truthy/Falsy:</strong> ' + (value ? 'truthy' : 'falsy');
                    } catch (e) {
                        typeInfo = '<span style="color:#ef4444">Error: ' + e.message + '</span>';
                    }

                    result.innerHTML = typeInfo;
                }
            </script>
        `,
        notes: 'Try these examples in the interactive checker: 42, "hello", true, null, undefined, [], {}, [1,2,3]'
    },

    'js-functions': {
        title: 'Function Basics',
        language: 'JavaScript',
        description: 'Functions are reusable blocks of code. JavaScript supports multiple ways to define functions, each with different characteristics.',
        code: `// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function Expression
const greet2 = function(name) {
    return \`Hello, \${name}!\`;
};

// Arrow Function (ES6+)
const greet3 = (name) => {
    return \`Hello, \${name}!\`;
};

// Arrow Function (concise)
const greet4 = name => \`Hello, \${name}!\`;

// Function with default parameters
function greet(name = "Guest") {
    return \`Hello, \${name}!\`;
}

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Function returning multiple values (object)
function getUser() {
    return {
        name: "John",
        age: 30,
        email: "john@example.com"
    };
}

// Function returning multiple values (array)
function getCoordinates() {
    return [10, 20];
}
const [x, y] = getCoordinates(); // Destructuring

// Higher-order function (takes function as argument)
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const result = applyOperation(5, 3, (x, y) => x + y); // 8

// Function returning a function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("I run immediately!");
})();

// Recursive function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <h4 style="margin-bottom:15px;font-weight:700">Function Calculator:</h4>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:15px">
                    <input type="number" id="num1" placeholder="Number 1" style="padding:12px;border:2px solid #e0e0e0;border-radius:8px">
                    <input type="number" id="num2" placeholder="Number 2" style="padding:12px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:15px">
                    <button onclick="calculate('add')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:700;cursor:pointer">Add</button>
                    <button onclick="calculate('subtract')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:700;cursor:pointer">Subtract</button>
                    <button onclick="calculate('multiply')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:700;cursor:pointer">Multiply</button>
                    <button onclick="calculate('divide')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:700;cursor:pointer">Divide</button>
                </div>
                <div id="calc-result" style="padding:20px;background:#f8f9fa;border-radius:8px;text-align:center;font-size:1.5em;font-weight:700;color:#667eea"></div>
            </div>
            <script>
                const operations = {
                    add: (a, b) => a + b,
                    subtract: (a, b) => a - b,
                    multiply: (a, b) => a * b,
                    divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
                };

                function calculate(operation) {
                    const num1 = parseFloat(document.getElementById('num1').value) || 0;
                    const num2 = parseFloat(document.getElementById('num2').value) || 0;
                    const result = operations[operation](num1, num2);
                    document.getElementById('calc-result').textContent = 'Result: ' + result;
                }
            </script>
        `
    },

    'js-arrays': {
        title: 'Array Methods',
        language: 'JavaScript',
        description: 'Arrays are ordered collections with powerful built-in methods. Master map, filter, reduce, and other methods for data manipulation.',
        code: `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - combine elements into a single value
const sum = numbers.reduce((total, n) => total + n, 0);
// 15

// forEach - execute function for each element
numbers.forEach(n => console.log(n));

// find - get first element that matches
const found = numbers.find(n => n > 3);
// 4

// findIndex - get index of first match
const index = numbers.findIndex(n => n > 3);
// 3

// some - check if any element passes test
const hasEven = numbers.some(n => n % 2 === 0);
// true

// every - check if all elements pass test
const allPositive = numbers.every(n => n > 0);
// true

// includes - check if array contains value
const hasThree = numbers.includes(3);
// true

// sort - sort array (mutates original!)
const names = ['Charlie', 'Alice', 'Bob'];
names.sort(); // ['Alice', 'Bob', 'Charlie']

const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b); // [1, 1, 3, 4, 5]

// reverse - reverse array (mutates original!)
numbers.reverse(); // [5, 4, 3, 2, 1]

// concat - combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]

// slice - extract portion (doesn't mutate)
const sliced = numbers.slice(1, 3); // [2, 3]

// splice - add/remove elements (mutates!)
const items = [1, 2, 3, 4, 5];
items.splice(2, 1); // Remove 1 item at index 2
// items is now [1, 2, 4, 5]

// push - add to end
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// pop - remove from end
const last = numbers.pop(); // 6

// unshift - add to beginning
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]

// shift - remove from beginning
const first = numbers.shift(); // 0

// join - convert to string
const str = numbers.join(', '); // "1, 2, 3, 4, 5"

// Chaining methods
const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);

// Real-world example: processing user data
const users = [
    { name: 'John', age: 30, active: true },
    { name: 'Jane', age: 25, active: false },
    { name: 'Bob', age: 35, active: true }
];

const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);
// ['John', 'Bob']`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <h4 style="margin-bottom:15px;font-weight:700">Interactive Array Methods:</h4>
                <div style="margin-bottom:15px">
                    <label style="display:block;margin-bottom:8px;font-weight:600">Numbers (comma-separated):</label>
                    <input type="text" id="array-input" value="1,2,3,4,5,6,7,8,9,10" style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px">
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:15px">
                    <button onclick="arrayDemo('map')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer">×2 (map)</button>
                    <button onclick="arrayDemo('filter')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Evens (filter)</button>
                    <button onclick="arrayDemo('reduce')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Sum (reduce)</button>
                    <button onclick="arrayDemo('sort')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Sort</button>
                    <button onclick="arrayDemo('reverse')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Reverse</button>
                    <button onclick="arrayDemo('max')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Max</button>
                </div>
                <div id="array-result" style="padding:20px;background:#f8f9fa;border-radius:8px;font-family:monospace"></div>
            </div>
            <script>
                function arrayDemo(method) {
                    const input = document.getElementById('array-input').value;
                    const numbers = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
                    let result;

                    switch(method) {
                        case 'map':
                            result = numbers.map(n => n * 2);
                            break;
                        case 'filter':
                            result = numbers.filter(n => n % 2 === 0);
                            break;
                        case 'reduce':
                            result = numbers.reduce((sum, n) => sum + n, 0);
                            break;
                        case 'sort':
                            result = [...numbers].sort((a, b) => a - b);
                            break;
                        case 'reverse':
                            result = [...numbers].reverse();
                            break;
                        case 'max':
                            result = Math.max(...numbers);
                            break;
                    }

                    document.getElementById('array-result').innerHTML =
                        '<strong>Original:</strong> [' + numbers.join(', ') + ']<br><br>' +
                        '<strong>Result:</strong> ' + (Array.isArray(result) ? '[' + result.join(', ') + ']' : result);
                }
            </script>
        `
    },

    'js-dom-select': {
        title: 'Selecting Elements',
        language: 'JavaScript',
        description: 'DOM manipulation starts with selecting elements. Modern JavaScript provides several methods to find and select HTML elements.',
        code: `// querySelector - selects first match (CSS selector)
const element = document.querySelector('.my-class');
const button = document.querySelector('#submit-btn');
const firstParagraph = document.querySelector('p');

// querySelectorAll - selects all matches (returns NodeList)
const allButtons = document.querySelectorAll('button');
const allLinks = document.querySelectorAll('a');

// Convert NodeList to Array for array methods
const buttonsArray = Array.from(allButtons);
const linksArray = [...allLinks]; // Spread operator

// getElementById - select by ID (fast!)
const header = document.getElementById('header');

// getElementsByClassName - select by class (returns HTMLCollection)
const boxes = document.getElementsByClassName('box');

// getElementsByTagName - select by tag name
const paragraphs = document.getElementsByTagName('p');

// Complex selectors
const nestedElement = document.querySelector('.container > .child');
const multipleClasses = document.querySelector('.class1.class2');
const attributeSelector = document.querySelector('[data-id="123"]');

// Selecting from a specific parent
const container = document.querySelector('.container');
const childElements = container.querySelectorAll('.item');

// Combining selectors
const activeButtons = document.querySelectorAll('button.active');
const links = document.querySelectorAll('a[href^="https"]');

// Iterating over selected elements
document.querySelectorAll('.box').forEach(box => {
    console.log(box.textContent);
});

// Closest parent match
const button = document.querySelector('.btn');
const form = button.closest('form'); // Find closest form ancestor

// Next/Previous siblings
const el = document.querySelector('.item');
const next = el.nextElementSibling;
const prev = el.previousElementSibling;

// Parent and children
const parent = element.parentElement;
const children = element.children; // Direct children only
const allDescendants = element.querySelectorAll('*'); // All descendants

// First and last child
const firstChild = container.firstElementChild;
const lastChild = container.lastElementChild;`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <div style="margin-bottom:20px;padding:20px;background:#f8f9fa;border-radius:8px">
                    <h4 id="demo-header" style="margin-bottom:10px">Sample Header</h4>
                    <p class="demo-para">First paragraph</p>
                    <p class="demo-para">Second paragraph</p>
                    <div class="demo-box">Box 1</div>
                    <div class="demo-box">Box 2</div>
                    <button class="demo-btn">Button</button>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:15px">
                    <button onclick="selectDemo('id')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer;font-size:0.9em">Select by ID</button>
                    <button onclick="selectDemo('class')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer;font-size:0.9em">Select by Class</button>
                    <button onclick="selectDemo('tag')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer;font-size:0.9em">Select by Tag</button>
                    <button onclick="selectDemo('all')" style="background:#667eea;color:white;padding:10px;border-radius:8px;border:none;font-weight:600;cursor:pointer;font-size:0.9em">Select All Boxes</button>
                </div>
                <div id="select-result" style="padding:15px;background:#f8f9fa;border-radius:8px;font-family:monospace;min-height:60px"></div>
            </div>
            <script>
                function selectDemo(type) {
                    let result = '';
                    switch(type) {
                        case 'id':
                            const header = document.querySelector('#demo-header');
                            result = 'Selected: ' + header.tagName + ' with text: "' + header.textContent + '"';
                            header.style.background = '#ffe66d';
                            setTimeout(() => header.style.background = '', 2000);
                            break;
                        case 'class':
                            const paras = document.querySelectorAll('.demo-para');
                            result = 'Found ' + paras.length + ' paragraphs';
                            paras.forEach(p => {
                                p.style.background = '#ffe66d';
                                setTimeout(() => p.style.background = '', 2000);
                            });
                            break;
                        case 'tag':
                            const buttons = document.querySelectorAll('.demo-btn');
                            result = 'Found ' + buttons.length + ' button(s)';
                            break;
                        case 'all':
                            const boxes = document.querySelectorAll('.demo-box');
                            result = 'Found ' + boxes.length + ' boxes: ' + Array.from(boxes).map(b => '"' + b.textContent + '"').join(', ');
                            boxes.forEach(box => {
                                box.style.background = '#ffe66d';
                                setTimeout(() => box.style.background = '', 2000);
                            });
                            break;
                    }
                    document.getElementById('select-result').textContent = result;
                }
            </script>
        `
    },

    'js-dom-modify': {
        title: 'Modifying Elements',
        language: 'JavaScript',
        description: 'Once you\'ve selected elements, you can modify their content, attributes, styles, and classes dynamically.',
        code: `const element = document.querySelector('.my-element');

// Modifying content
element.textContent = 'New text'; // Plain text only
element.innerHTML = '<strong>Bold text</strong>'; // Can include HTML

// Reading content
const text = element.textContent;
const html = element.innerHTML;

// Modifying attributes
element.setAttribute('data-id', '123');
element.setAttribute('title', 'Hover text');
const value = element.getAttribute('data-id');
element.removeAttribute('title');

// Shorthand for common attributes
element.id = 'new-id';
element.className = 'new-class';
const link = document.querySelector('a');
link.href = 'https://example.com';

// Modifying styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
element.style.display = 'none'; // Hide
element.style.display = 'block'; // Show

// Multiple styles at once
Object.assign(element.style, {
    color: 'white',
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '8px'
});

// Working with classes
element.classList.add('active'); // Add class
element.classList.remove('hidden'); // Remove class
element.classList.toggle('expanded'); // Toggle (add if not present, remove if present)
element.classList.contains('active'); // Check if has class

// Multiple classes
element.classList.add('class1', 'class2', 'class3');
element.classList.remove('class1', 'class2');

// Replace class
element.classList.replace('old-class', 'new-class');

// Data attributes
element.dataset.userId = '123'; // Sets data-user-id="123"
element.dataset.status = 'active'; // Sets data-status="active"
const userId = element.dataset.userId; // Read data-user-id

// Form elements
const input = document.querySelector('input');
input.value = 'new value'; // Set input value
input.placeholder = 'Enter text...';
input.disabled = true; // Disable
input.disabled = false; // Enable

const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.checked = true; // Check
checkbox.checked = false; // Uncheck

// Reading computed styles
const styles = window.getComputedStyle(element);
const bgColor = styles.backgroundColor;
const height = styles.height;`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <div id="modify-demo" style="padding:30px;background:#f8f9fa;border-radius:12px;text-align:center;transition:all 0.3s;margin-bottom:20px">
                    <h3>Modify Me!</h3>
                    <p>Click buttons below to see changes</p>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px">
                    <button onclick="modifyDemo('text')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Change Text</button>
                    <button onclick="modifyDemo('color')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Change Color</button>
                    <button onclick="modifyDemo('size')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Change Size</button>
                    <button onclick="modifyDemo('class')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Toggle Class</button>
                    <button onclick="modifyDemo('hide')" style="background:#667eea;color:white;padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Toggle Visibility</button>
                    <button onclick="modifyDemo('reset')" style="background:#6b7280;color:white;padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer">Reset</button>
                </div>
            </div>
            <script>
                let modifyState = { hidden: false, classToggled: false };
                function modifyDemo(action) {
                    const el = document.getElementById('modify-demo');
                    switch(action) {
                        case 'text':
                            el.innerHTML = '<h3>🎉 Text Changed!</h3><p>textContent and innerHTML modified</p>';
                            break;
                        case 'color':
                            const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
                            el.style.background = colors[Math.floor(Math.random() * colors.length)];
                            el.style.color = 'white';
                            break;
                        case 'size':
                            el.style.transform = el.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
                            break;
                        case 'class':
                            modifyState.classToggled = !modifyState.classToggled;
                            if (modifyState.classToggled) {
                                el.style.border = '4px solid #667eea';
                                el.style.boxShadow = '0 10px 30px rgba(102,126,234,0.3)';
                            } else {
                                el.style.border = 'none';
                                el.style.boxShadow = 'none';
                            }
                            break;
                        case 'hide':
                            modifyState.hidden = !modifyState.hidden;
                            el.style.display = modifyState.hidden ? 'none' : 'block';
                            break;
                        case 'reset':
                            el.innerHTML = '<h3>Modify Me!</h3><p>Click buttons below to see changes</p>';
                            el.style = 'padding:30px;background:#f8f9fa;border-radius:12px;text-align:center;transition:all 0.3s;margin-bottom:20px';
                            modifyState = { hidden: false, classToggled: false };
                            break;
                    }
                }
            </script>
        `
    },

    'js-events': {
        title: 'Event Handling',
        language: 'JavaScript',
        description: 'Events allow you to respond to user interactions like clicks, typing, mouse movements, and more. Master event listeners for interactive web apps.',
        code: `// Adding event listeners
const button = document.querySelector('button');

// Method 1: addEventListener (recommended)
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function syntax
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Method 2: onclick property (less flexible)
button.onclick = function() {
    console.log('Clicked');
};

// Event object contains info about the event
button.addEventListener('click', (event) => {
    console.log(event.type); // "click"
    console.log(event.target); // the button element
    console.log(event.currentTarget); // also the button
    console.log(event.clientX, event.clientY); // mouse coordinates
});

// Common events

// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mousedown', handler);
element.addEventListener('mouseup', handler);
element.addEventListener('mousemove', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);

// Keyboard events
document.addEventListener('keydown', (e) => {
    console.log(e.key); // The key pressed
    console.log(e.code); // Physical key code
    console.log(e.ctrlKey, e.shiftKey, e.altKey); // Modifier keys
});

document.addEventListener('keyup', handler);
document.addEventListener('keypress', handler); // Deprecated

// Form events
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    // Handle form data
});

input.addEventListener('input', (e) => {
    console.log(e.target.value); // Current input value
});

input.addEventListener('change', handler); // When input loses focus
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window events
window.addEventListener('load', () => {
    // All resources loaded
});

window.addEventListener('DOMContentLoaded', () => {
    // DOM ready, but images/styles may still load
});

window.addEventListener('resize', () => {
    console.log(window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
});

// Event delegation (efficient for many elements)
document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        console.log('Item clicked:', e.target);
    }
});

// Remove event listener
function handleClick() {
    console.log('Clicked');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event options
element.addEventListener('click', handler, {
    once: true, // Remove after first call
    capture: true, // Use capture phase
    passive: true // Won't call preventDefault()
});

// Prevent default behavior
link.addEventListener('click', (e) => {
    e.preventDefault(); // Don't follow link
});

// Stop propagation (don't bubble to parent)
button.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Custom events
const customEvent = new CustomEvent('myEvent', {
    detail: { message: 'Hello!' }
});
element.dispatchEvent(customEvent);

element.addEventListener('myEvent', (e) => {
    console.log(e.detail.message);
});`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <div style="display:grid;gap:20px">
                    <div>
                        <h4 style="margin-bottom:10px;font-weight:700">Click Event:</h4>
                        <button id="click-btn" style="background:#667eea;color:white;padding:12px 24px;border-radius:8px;border:none;font-weight:700;cursor:pointer">Click Me!</button>
                        <span id="click-count" style="margin-left:15px;font-weight:700">Clicks: 0</span>
                    </div>
                    <div>
                        <h4 style="margin-bottom:10px;font-weight:700">Input Event:</h4>
                        <input type="text" id="text-input" placeholder="Type something..." style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px;margin-bottom:8px">
                        <div id="input-display" style="padding:12px;background:#f8f9fa;border-radius:8px;min-height:40px;font-family:monospace"></div>
                    </div>
                    <div>
                        <h4 style="margin-bottom:10px;font-weight:700">Mouse Move Event:</h4>
                        <div id="mouse-area" style="height:150px;background:#f8f9fa;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:crosshair;position:relative">
                            <div id="mouse-coords" style="font-family:monospace;font-weight:700">Move mouse here</div>
                        </div>
                    </div>
                    <div>
                        <h4 style="margin-bottom:10px;font-weight:700">Keyboard Event:</h4>
                        <input type="text" id="key-input" placeholder="Press any key..." style="width:100%;padding:12px;border:2px solid #e0e0e0;border-radius:8px;margin-bottom:8px">
                        <div id="key-display" style="padding:12px;background:#f8f9fa;border-radius:8px;font-family:monospace"></div>
                    </div>
                </div>
            </div>
            <script>
                // Click event
                let clicks = 0;
                document.getElementById('click-btn').addEventListener('click', () => {
                    clicks++;
                    document.getElementById('click-count').textContent = 'Clicks: ' + clicks;
                });

                // Input event
                document.getElementById('text-input').addEventListener('input', (e) => {
                    document.getElementById('input-display').textContent =
                        'You typed: ' + e.target.value + ' (Length: ' + e.target.value.length + ')';
                });

                // Mouse move event
                document.getElementById('mouse-area').addEventListener('mousemove', (e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.round(e.clientX - rect.left);
                    const y = Math.round(e.clientY - rect.top);
                    document.getElementById('mouse-coords').textContent = 'X: ' + x + ', Y: ' + y;
                });

                // Keyboard event
                document.getElementById('key-input').addEventListener('keydown', (e) => {
                    document.getElementById('key-display').innerHTML =
                        '<strong>Key:</strong> ' + e.key + '<br>' +
                        '<strong>Code:</strong> ' + e.code + '<br>' +
                        '<strong>Modifiers:</strong> ' +
                        (e.ctrlKey ? 'Ctrl ' : '') +
                        (e.shiftKey ? 'Shift ' : '') +
                        (e.altKey ? 'Alt ' : '') || 'None';
                });
            </script>
        `
    },

    'js-fetch': {
        title: 'Fetch API',
        language: 'JavaScript',
        description: 'The Fetch API provides a modern way to make HTTP requests. It returns Promises and works with async/await for clean, readable async code.',
        code: `// Basic GET request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// With async/await (cleaner!)
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// POST request
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
    }

    return await response.json();
}

// Example usage
createUser({ name: 'John', email: 'john@example.com' })
    .then(user => console.log('Created:', user))
    .catch(error => console.error('Error:', error));

// PUT request (update)
async function updateUser(id, userData) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    return await response.json();
}

// DELETE request
async function deleteUser(id) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE'
    });
    return response.ok;
}

// With authentication
async function fetchProtectedData(token) {
    const response = await fetch('https://api.example.com/protected', {
        headers: {
            'Authorization': \`Bearer \${token}\`
        }
    });
    return await response.json();
}

// With query parameters
const params = new URLSearchParams({
    search: 'javascript',
    limit: 10,
    page: 1
});
const url = \`https://api.example.com/search?\${params}\`;
const response = await fetch(url);

// Upload file
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.example.com/upload', {
        method: 'POST',
        body: formData // Don't set Content-Type header!
    });
    return await response.json();
}

// With timeout
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

// Handling different response types
const jsonData = await response.json();
const textData = await response.text();
const blobData = await response.blob(); // For files
const formData = await response.formData();

// Check response status
if (response.ok) {
    // Status 200-299
    const data = await response.json();
} else if (response.status === 404) {
    console.error('Not found');
} else if (response.status === 500) {
    console.error('Server error');
}

// Complete example with loading states
async function loadUserWithState(userId) {
    const state = {
        loading: true,
        data: null,
        error: null
    };

    updateUI('loading');

    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        state.data = await response.json();
        state.loading = false;
        updateUI('success', state.data);
    } catch (error) {
        state.error = error.message;
        state.loading = false;
        updateUI('error', error);
    }
}`,
        interactive: `
            <div style="padding:20px;background:white;border-radius:12px">
                <h4 style="margin-bottom:15px;font-weight:700">Fetch API Demo:</h4>
                <div style="margin-bottom:20px">
                    <button onclick="fetchDemo('user')" style="background:#667eea;color:white;padding:12px 24px;border-radius:8px;border:none;font-weight:700;cursor:pointer;margin-right:10px">Fetch Random User</button>
                    <button onclick="fetchDemo('joke')" style="background:#764ba2;color:white;padding:12px 24px;border-radius:8px;border:none;font-weight:700;cursor:pointer">Fetch Joke</button>
                </div>
                <div id="fetch-result" style="padding:20px;background:#f8f9fa;border-radius:12px;min-height:100px"></div>
            </div>
            <script>
                async function fetchDemo(type) {
                    const resultDiv = document.getElementById('fetch-result');
                    resultDiv.innerHTML = '<div style="display:flex;align-items:center;gap:10px"><div style="width:20px;height:20px;border:3px solid #667eea;border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite"></div><span>Loading...</span></div>';

                    try {
                        if (type === 'user') {
                            const response = await fetch('https://randomuser.me/api/');
                            const data = await response.json();
                            const user = data.results[0];

                            resultDiv.innerHTML = \`
                                <div style="display:flex;align-items:center;gap:20px">
                                    <img src="\${user.picture.large}" style="width:80px;height:80px;border-radius:50%;border:3px solid #667eea">
                                    <div>
                                        <h4 style="margin-bottom:5px;font-size:1.2em">\${user.name.first} \${user.name.last}</h4>
                                        <p style="color:#666;margin-bottom:3px">📧 \${user.email}</p>
                                        <p style="color:#666">📍 \${user.location.city}, \${user.location.country}</p>
                                    </div>
                                </div>
                            \`;
                        } else if (type === 'joke') {
                            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                            const joke = await response.json();

                            resultDiv.innerHTML = \`
                                <div style="text-align:center;padding:20px">
                                    <div style="font-size:2em;margin-bottom:15px">😄</div>
                                    <p style="font-size:1.1em;font-weight:700;margin-bottom:10px">\${joke.setup}</p>
                                    <p style="font-size:1.1em;color:#667eea;font-weight:600">\${joke.punchline}</p>
                                </div>
                            \`;
                        }
                    } catch (error) {
                        resultDiv.innerHTML = \`
                            <div style="background:#fee;border:2px solid #fcc;border-radius:8px;padding:15px;color:#c33">
                                <strong>Error:</strong> \${error.message}
                            </div>
                        \`;
                    }
                }
            </script>
            <style>
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            </style>
        `,
        notes: 'The Fetch API is promise-based and works great with async/await. Always handle errors and check response.ok before parsing!'
    },

    'js-operators': {
        title: 'Operators',
        language: 'JavaScript',
        description: 'JavaScript supports arithmetic, comparison, logical, assignment, and ternary operators.',
        code: `// Arithmetic
const sum = 10 + 5;
const mod = 10 % 3;

// Comparison
5 === '5'; // false
5 == '5';  // true (loose)
10 > 3;    // true

// Logical
const isAdmin = true;
const isActive = false;
isAdmin && isActive; // false
isAdmin || isActive; // true

// Ternary
const status = isAdmin ? 'Admin' : 'User';`
    },

    'js-control': {
        title: 'Control Flow',
        language: 'JavaScript',
        description: 'Control flow lets you run code conditionally with if/switch and repeatedly with loops.',
        code: `const score = 78;

if (score >= 90) {
  console.log('A');
} else if (score >= 75) {
  console.log('B');
} else {
  console.log('C');
}

switch (new Date().getDay()) {
  case 0: console.log('Sunday'); break;
  case 1: console.log('Monday'); break;
  default: console.log('Other day');
}

for (let i = 0; i < 3; i++) console.log(i);
for (const item of ['a', 'b', 'c']) console.log(item);`
    },

    'js-arrow': {
        title: 'Arrow Functions',
        language: 'JavaScript',
        description: 'Arrow functions offer concise syntax and lexical `this` binding.',
        code: `const add = (a, b) => a + b;
const square = n => n * n;

const user = {
  name: 'Ava',
  regular() { return this.name; },
  broken: () => this.name // this is NOT user here
};

console.log(add(2, 3));`
    },

    'js-callbacks': {
        title: 'Callbacks',
        language: 'JavaScript',
        description: 'A callback is a function passed to another function to run later.',
        code: `function processUser(name, callback) {
  const message = 'Hello ' + name;
  callback(message);
}

processUser('Sam', (msg) => {
  console.log(msg);
});

setTimeout(() => console.log('Runs later'), 1000);`
    },

    'js-closures': {
        title: 'Closures',
        language: 'JavaScript',
        description: 'Closures let inner functions access variables from outer scopes even after outer functions return.',
        code: `function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
    },

    'js-objects': {
        title: 'Objects',
        language: 'JavaScript',
        description: 'Objects store key-value data and methods.',
        code: `const user = {
  name: 'Mia',
  age: 28,
  greet() {
    return 'Hi, ' + this.name;
  }
};

user.email = 'mia@example.com';
console.log(user['name']);
console.log(Object.keys(user));`
    },

    'js-destructuring': {
        title: 'Destructuring',
        language: 'JavaScript',
        description: 'Destructuring extracts values from arrays/objects into variables.',
        code: `const arr = [10, 20, 30];
const [a, b] = arr;

const person = { name: 'Noah', city: 'Austin' };
const { name, city, country = 'USA' } = person;

console.log(a, b, name, city, country);`
    },

    'js-spread': {
        title: 'Spread & Rest',
        language: 'JavaScript',
        description: 'Spread expands values; rest collects remaining values.',
        code: `const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

const user = { name: 'A', role: 'dev' };
const updated = { ...user, role: 'lead' };

function sum(...nums) {
  return nums.reduce((t, n) => t + n, 0);
}`
    },

    'js-dom-create': {
        title: 'Creating Elements',
        language: 'JavaScript',
        description: 'Create, insert, and remove DOM elements dynamically.',
        code: `const list = document.querySelector('#list');
const li = document.createElement('li');
li.textContent = 'New item';
list.appendChild(li);

li.classList.add('active');
li.remove();`
    },

    'js-promises': {
        title: 'Promises',
        language: 'JavaScript',
        description: 'Promises represent asynchronous completion or failure.',
        code: `const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(500)
  .then(() => 'done')
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log('finished'));

Promise.all([wait(100), wait(200)]).then(() => console.log('all done'));`
    },

    'js-async-await': {
        title: 'Async/Await',
        language: 'JavaScript',
        description: 'Async/await is cleaner syntax over promises.',
        code: `async function loadUser(id) {
  try {
    const res = await fetch('/api/users/' + id);
    if (!res.ok) throw new Error('Request failed');
    return await res.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}`
    },

    'js-error-handling': {
        title: 'Error Handling',
        language: 'JavaScript',
        description: 'Use try/catch and custom errors to handle failures gracefully.',
        code: `class ValidationError extends Error {}

function parseAge(value) {
  const age = Number(value);
  if (Number.isNaN(age) || age < 0) {
    throw new ValidationError('Invalid age');
  }
  return age;
}

try {
  console.log(parseAge('-1'));
} catch (e) {
  console.error(e.message);
}`
    },

    'js-state-basic': {
        title: 'Local State',
        language: 'JavaScript',
        description: 'Track local app state in plain objects and update UI after state changes.',
        code: `const state = { count: 0 };

function increment() {
  state.count += 1;
  render();
}

function render() {
  document.querySelector('#count').textContent = state.count;
}`
    },

    'js-state-ui': {
        title: 'UI State',
        language: 'JavaScript',
        description: 'Keep UI controls and view output synchronized through render functions.',
        code: `const filters = { search: '', sort: 'asc' };

function updateSearch(value) {
  filters.search = value;
  renderList();
}

function updateSort(value) {
  filters.sort = value;
  renderList();
}`
    },

    'js-localstorage': {
        title: 'LocalStorage',
        language: 'JavaScript',
        description: 'Persist small key-value data in the browser.',
        code: `localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');

const user = { name: 'Ava', role: 'dev' };
localStorage.setItem('user', JSON.stringify(user));
const parsed = JSON.parse(localStorage.getItem('user'));

localStorage.removeItem('theme');`
    },

    'js-state-patterns': {
        title: 'State Patterns',
        language: 'JavaScript',
        description: 'Use immutable updates and reducer-like patterns for predictable state transitions.',
        code: `const initial = { todos: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'toggle':
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        )
      };
    default:
      return state;
  }
}`
    },

    // ============================================
    // NEXT.JS EXAMPLES
    // ============================================
    'next-intro': {
        title: 'What is Next.js?',
        language: 'JavaScript',
        description: 'Next.js is a React framework for production apps with routing, SSR/SSG, and optimizations.',
        code: `// Create a Next.js app
npx create-next-app@latest my-app

// Run dev server
cd my-app
npm run dev`
    },
    'next-setup': {
        title: 'Setup & Installation',
        language: 'Bash',
        description: 'Install Next.js and start development quickly.',
        code: `npx create-next-app@latest my-app --typescript --eslint
cd my-app
npm run dev`
    },
    'next-structure': {
        title: 'Project Structure',
        language: 'Text',
        description: 'Typical App Router structure in modern Next.js.',
        code: `app/
  layout.tsx
  page.tsx
  dashboard/page.tsx
components/
lib/
public/`
    },
    'next-features': {
        title: 'Key Features',
        language: 'Markdown',
        description: 'Core capabilities that Next.js provides out of the box.',
        code: `- File-based routing
- Server Components
- SSR / SSG / ISR
- API route handlers
- Image and font optimization
- Caching and streaming`
    },
    'next-app-router': {
        title: 'App Router',
        language: 'TypeScript',
        description: 'Route by creating folders/files in the app directory.',
        code: `// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}`
    },
    'next-pages-router': {
        title: 'Pages Router',
        language: 'JavaScript',
        description: 'Legacy routing system using the pages directory.',
        code: `// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}`
    },
    'next-dynamic': {
        title: 'Dynamic Routes',
        language: 'TypeScript',
        description: 'Use bracket segments to capture dynamic params.',
        code: `// app/users/[id]/page.tsx
export default function UserPage({ params }: { params: { id: string } }) {
  return <div>User ID: {params.id}</div>;
}`
    },
    'next-navigation': {
        title: 'Navigation',
        language: 'TypeScript',
        description: 'Use Link for client-side navigation and useRouter for imperative routes.',
        code: `import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  return (
    <>
      <Link href=\"/dashboard\">Dashboard</Link>
      <button onClick={() => router.push('/settings')}>Go Settings</button>
    </>
  );
}`
    },
    'next-ssr': {
        title: 'Server-Side Rendering',
        language: 'TypeScript',
        description: 'Render per request on the server.',
        code: `export default async function Page() {
  const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`
    },
    'next-ssg': {
        title: 'Static Generation',
        language: 'TypeScript',
        description: 'Render at build time for fast static pages.',
        code: `export default async function Page() {
  const res = await fetch('https://api.example.com/posts', { cache: 'force-cache' });
  const posts = await res.json();
  return <ul>{posts.map((p: any) => <li key={p.id}>{p.title}</li>)}</ul>;
}`
    },
    'next-isr': {
        title: 'Incremental Static Regeneration',
        language: 'TypeScript',
        description: 'Revalidate static pages periodically.',
        code: `export const revalidate = 60; // seconds

export default async function Page() {
  const data = await fetch('https://api.example.com/news').then(r => r.json());
  return <div>{data.length} items</div>;
}`
    },
    'next-client-fetch': {
        title: 'Client-Side Fetching',
        language: 'TypeScript',
        description: 'Fetch in client components for user-specific or live data.',
        code: `'use client';
import { useEffect, useState } from 'react';

export default function ClientData() {
  const [data, setData] = useState<any>(null);
  useEffect(() => { fetch('/api/hello').then(r => r.json()).then(setData); }, []);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`
    },
    'next-server-components': {
        title: 'Server Components',
        language: 'TypeScript',
        description: 'Default in app router; run on server and reduce client JS.',
        code: `export default async function Products() {
  const products = await fetch('https://api.example.com/products').then(r => r.json());
  return <ul>{products.map((p: any) => <li key={p.id}>{p.name}</li>)}</ul>;
}`
    },
    'next-client-components': {
        title: 'Client Components',
        language: 'TypeScript',
        description: 'Use when interactivity/hooks/browser APIs are needed.',
        code: `'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}`
    },
    'next-layouts': {
        title: 'Layouts',
        language: 'TypeScript',
        description: 'Persist shared UI across nested routes with layout.tsx.',
        code: `// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}`
    },
    'next-metadata': {
        title: 'Metadata',
        language: 'TypeScript',
        description: 'Set SEO metadata per route.',
        code: `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard page'
};`
    },
    'next-api-basic': {
        title: 'Basic API Routes',
        language: 'TypeScript',
        description: 'Create route handlers in app/api.',
        code: `// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hello from Next.js API' });
}`
    },
    'next-api-dynamic': {
        title: 'Dynamic API Routes',
        language: 'TypeScript',
        description: 'Dynamic params also work in API route handlers.',
        code: `// app/api/users/[id]/route.ts
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  return Response.json({ id: params.id });
}`
    },
    'next-api-methods': {
        title: 'HTTP Methods',
        language: 'TypeScript',
        description: 'Export handlers for GET/POST/PUT/DELETE in a route.',
        code: `export async function GET() { return Response.json({ ok: true }); }
export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ created: body }, { status: 201 });
}`
    },
    'next-middleware': {
        title: 'Middleware',
        language: 'TypeScript',
        description: 'Run code before request completion for auth/redirects.',
        code: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (!req.cookies.get('session')) return NextResponse.redirect(new URL('/login', req.url));
  return NextResponse.next();
}`
    },
    'next-image': {
        title: 'Image Optimization',
        language: 'TypeScript',
        description: 'Use next/image for optimized images, lazy loading, and resizing.',
        code: `import Image from 'next/image';

export default function Hero() {
  return <Image src=\"/hero.jpg\" alt=\"Hero\" width={1200} height={600} priority />;
}`
    },
    'next-fonts': {
        title: 'Font Optimization',
        language: 'TypeScript',
        description: 'Use next/font to self-host and optimize font loading.',
        code: `import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Page() {
  return <main className={inter.className}>Optimized font text</main>;
}`
    },
    'next-caching': {
        title: 'Caching Strategies',
        language: 'TypeScript',
        description: 'Control fetch caching with cache and revalidate options.',
        code: `await fetch('/api/data', { cache: 'force-cache' }); // static
await fetch('/api/data', { cache: 'no-store' });    // dynamic
await fetch('/api/data', { next: { revalidate: 120 } }); // ISR-like`
    },
    'next-performance': {
        title: 'Performance Tips',
        language: 'Markdown',
        description: 'Practical ways to keep Next.js apps fast.',
        code: `- Prefer Server Components by default
- Use dynamic imports for heavy client code
- Optimize images and fonts
- Cache where possible
- Avoid unnecessary client-side state`
    },

    // ============================================
    // FASTAPI EXAMPLES
    // ============================================
    'fastapi-intro': {
        title: 'What is FastAPI?',
        language: 'Python',
        description: 'FastAPI is a modern Python framework for high-performance APIs with type hints and auto docs.',
        code: `from fastapi import FastAPI
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello FastAPI"}`},
    'fastapi-setup': {
        title: 'Installation & Setup',
        language: 'Bash',
        description: 'Install FastAPI and run with Uvicorn.',
        code: `pip install fastapi uvicorn
uvicorn main:app --reload`},
    'fastapi-first-api': {
        title: 'First API',
        language: 'Python',
        description: 'Create your first endpoint.',
        code: `from fastapi import FastAPI
app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}`},
    'fastapi-docs': {
        title: 'Auto Documentation',
        language: 'Text',
        description: 'FastAPI automatically generates OpenAPI docs.',
        code: `/docs      -> Swagger UI
/redoc     -> ReDoc
/openapi.json -> OpenAPI spec`},
    'fastapi-path': {
        title: 'Path Parameters',
        language: 'Python',
        description: 'Use typed path params for validation.',
        code: `@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}`},
    'fastapi-query': {
        title: 'Query Parameters',
        language: 'Python',
        description: 'Query params are optional by default.',
        code: `@app.get("/search")
async def search(q: str = "", limit: int = 10):
    return {"q": q, "limit": limit}`},
    'fastapi-body': {
        title: 'Request Body',
        language: 'Python',
        description: 'Parse JSON request body with Pydantic models.',
        code: `from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float

@app.post("/items")
async def create_item(item: Item):
    return item`},
    'fastapi-methods': {
        title: 'HTTP Methods',
        language: 'Python',
        description: 'Define handlers for HTTP verbs.',
        code: `@app.get("/items")
async def list_items(): ...

@app.post("/items")
async def create_item(): ...

@app.put("/items/{id}")
async def update_item(id: int): ...

@app.delete("/items/{id}")
async def delete_item(id: int): ...`},
    'fastapi-models': {
        title: 'Data Models',
        language: 'Python',
        description: 'Pydantic models define schema and validation.',
        code: `class User(BaseModel):
    id: int
    email: str
    is_active: bool = True`},
    'fastapi-validation': {
        title: 'Validation',
        language: 'Python',
        description: 'Use Field constraints and types for strict validation.',
        code: `from pydantic import BaseModel, Field

class Product(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    price: float = Field(gt=0)`},
    'fastapi-response-models': {
        title: 'Response Models',
        language: 'Python',
        description: 'Shape and validate output payloads.',
        code: `class UserOut(BaseModel):
    id: int
    email: str

@app.get("/users/{id}", response_model=UserOut)
async def get_user(id: int):
    return {"id": id, "email": "a@x.com", "password": "hidden"}`},
    'fastapi-nested': {
        title: 'Nested Models',
        language: 'Python',
        description: 'Compose models inside other models.',
        code: `class Address(BaseModel):
    city: str
    zip: str

class User(BaseModel):
    name: str
    address: Address`},
    'fastapi-depends': {
        title: 'Dependency Injection',
        language: 'Python',
        description: 'Share reusable logic with Depends.',
        code: `from fastapi import Depends

def common_params(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}

@app.get("/items")
async def items(p=Depends(common_params)):
    return p`},
    'fastapi-db': {
        title: 'Database Dependencies',
        language: 'Python',
        description: 'Provide DB session via dependency.',
        code: `def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`},
    'fastapi-auth-dep': {
        title: 'Auth Dependencies',
        language: 'Python',
        description: 'Resolve authenticated user through dependency.',
        code: `from fastapi import Depends, HTTPException

def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    if not user:
        raise HTTPException(status_code=401)
    return user`},
    'fastapi-global-deps': {
        title: 'Global Dependencies',
        language: 'Python',
        description: 'Apply dependencies to the whole app.',
        code: `app = FastAPI(dependencies=[Depends(verify_api_key)])`},
    'fastapi-auth': {
        title: 'Authentication',
        language: 'Python',
        description: 'Protect routes by validating bearer token.',
        code: `from fastapi.security import OAuth2PasswordBearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/me")
async def me(token: str = Depends(oauth2_scheme)):
    return {"token": token}`},
    'fastapi-jwt': {
        title: 'JWT Tokens',
        language: 'Python',
        description: 'Issue and verify JWT access tokens.',
        code: `from jose import jwt
token = jwt.encode({"sub": "user1"}, "SECRET", algorithm="HS256")
payload = jwt.decode(token, "SECRET", algorithms=["HS256"])`},
    'fastapi-oauth2': {
        title: 'OAuth2',
        language: 'Python',
        description: 'Use OAuth2 password flow with token endpoint.',
        code: `from fastapi.security import OAuth2PasswordRequestForm

@app.post("/token")
async def login(form: OAuth2PasswordRequestForm = Depends()):
    return {"access_token": "token", "token_type": "bearer"}`},
    'fastapi-cors': {
        title: 'CORS',
        language: 'Python',
        description: 'Allow browser apps from specific origins.',
        code: `from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)`},
    'fastapi-sqlalchemy': {
        title: 'SQLAlchemy',
        language: 'Python',
        description: 'Integrate SQLAlchemy ORM with FastAPI.',
        code: `engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)`},
    'fastapi-crud': {
        title: 'CRUD Operations',
        language: 'Python',
        description: 'Implement create/read/update/delete endpoints.',
        code: `@app.post("/users")
def create_user(user: UserCreate, db: Session = Depends(get_db)): ...
@app.get("/users/{id}")
def read_user(id: int, db: Session = Depends(get_db)): ...`},
    'fastapi-async-db': {
        title: 'Async Database',
        language: 'Python',
        description: 'Use async engines/sessions for async workloads.',
        code: `engine = create_async_engine(DB_URL)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)`},
    'fastapi-migrations': {
        title: 'Migrations',
        language: 'Bash',
        description: 'Manage schema changes with Alembic.',
        code: `alembic init alembic
alembic revision --autogenerate -m "create users"
alembic upgrade head`},
    'fastapi-websocket': {
        title: 'WebSockets',
        language: 'Python',
        description: 'Build real-time endpoints with websocket routes.',
        code: `from fastapi import WebSocket

@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket):
    await ws.accept()
    while True:
        msg = await ws.receive_text()
        await ws.send_text(f"Echo: {msg}")`},
    'fastapi-background': {
        title: 'Background Tasks',
        language: 'Python',
        description: 'Run non-blocking tasks after sending response.',
        code: `from fastapi import BackgroundTasks

def send_email(email: str): ...

@app.post("/notify")
async def notify(email: str, tasks: BackgroundTasks):
    tasks.add_task(send_email, email)
    return {"queued": True}`},
    'fastapi-testing': {
        title: 'Testing',
        language: 'Python',
        description: 'Use TestClient for endpoint tests.',
        code: `from fastapi.testclient import TestClient
client = TestClient(app)

def test_root():
    r = client.get("/")
    assert r.status_code == 200`},
    'fastapi-deploy': {
        title: 'Deployment',
        language: 'Bash',
        description: 'Run production with multiple workers.',
        code: `pip install gunicorn
gunicorn main:app -k uvicorn.workers.UvicornWorker -w 4 -b 0.0.0.0:8000`},

    // ============================================
    // AGILE + JIRA EXAMPLES
    // ============================================
    'agile-what': {
        title: 'What is Agile?',
        language: 'Process',
        description: 'Agile is an iterative way of delivering software in small increments with fast feedback loops. Teams prioritize customer value, adaptability, and frequent releases over big upfront plans.',
        code: `Agile core idea:
1) Build a small slice
2) Get feedback quickly
3) Adjust priorities
4) Repeat`,
        notes: 'Agile is not one framework; Scrum and Kanban are common implementations.'
    },
    'agile-principles': {
        title: 'Agile Principles',
        language: 'Process',
        description: 'Agile teams emphasize collaboration, working software, and continuous improvement.',
        code: `Practical principles:
- Ship value early and often
- Welcome requirement changes
- Collaborate daily across roles
- Keep work sustainable
- Reflect and improve regularly`,
        notes: 'In day-to-day work, this means short cycles, frequent demos, and routine retrospectives.'
    },
    'agile-frameworks': {
        title: 'Scrum, Kanban, Lean',
        language: 'Process',
        description: 'Different Agile frameworks fit different team contexts.',
        code: `Scrum:
- Timeboxed sprints
- Defined roles and ceremonies

Kanban:
- Continuous flow
- WIP limits
- Focus on cycle time

Lean:
- Eliminate waste
- Optimize end-to-end value flow`
    },
    'agile-value-delivery': {
        title: 'Iterative Value Delivery',
        language: 'Process',
        description: 'Deliver in thin vertical slices instead of waiting for a large “big-bang” release.',
        code: `Instead of:
Build full feature set for 3 months

Do:
Week 1: login flow
Week 2: core dashboard
Week 3: alerts
... each releasable`
    },
    'scrum-roles': {
        title: 'Scrum Roles',
        language: 'Process',
        description: 'Scrum typically involves a Product Owner, Scrum Master, and Developers.',
        code: `Product Owner:
- Owns backlog priority
- Clarifies business value

Scrum Master:
- Removes process blockers
- Facilitates ceremonies

Developers:
- Build and deliver increments`
    },
    'scrum-ceremonies': {
        title: 'Scrum Ceremonies',
        language: 'Process',
        description: 'Core Scrum events create alignment and learning cadence.',
        code: `1) Sprint Planning
2) Daily Standup
3) Sprint Review (demo)
4) Retrospective`,
        notes: 'Keep ceremonies timeboxed and outcome-focused.'
    },
    'scrum-artifacts': {
        title: 'Scrum Artifacts',
        language: 'Process',
        description: 'Artifacts provide visibility into what is planned, in progress, and done.',
        code: `- Product Backlog: ordered future work
- Sprint Backlog: sprint-selected work
- Increment: potentially shippable output`
    },
    'scrum-definition-of-done': {
        title: 'Definition of Done',
        language: 'Process',
        description: 'A shared quality checklist that every story must satisfy before being marked done.',
        code: `Example DoD:
- Code merged to main
- Tests passing
- Acceptance criteria met
- Reviewed by QA/peer
- Documentation updated`,
        notes: 'DoD prevents “done but not really done” ambiguity.'
    },
    'agile-backlog': {
        title: 'Product Backlog',
        language: 'Process',
        description: 'A prioritized list of all potential work owned by the Product Owner.',
        code: `Backlog item fields:
- Title
- Business value
- Priority
- Estimate
- Acceptance criteria`,
        notes: 'Keep top backlog items refined enough for near-term delivery.'
    },
    'agile-epic': {
        title: 'Epic',
        language: 'Process',
        description: 'An epic is a large body of work that spans multiple stories/sprints.',
        code: `Epic: "User Onboarding Revamp"
Stories:
- Signup redesign
- Email verification
- Profile completion
- Welcome tutorial`
    },
    'agile-story': {
        title: 'User Story',
        language: 'Process',
        description: 'A small, testable unit of user value typically written from user perspective.',
        code: `Story template:
As a <type of user>,
I want <goal>,
so that <benefit>.

Example:
As a manager, I want weekly summary emails so that I can track team progress.`
    },
    'agile-task': {
        title: 'Task & Sub-task',
        language: 'Process',
        description: 'Tasks break stories into implementation steps; sub-tasks can represent specific engineering actions.',
        code: `Story: Add password reset
Tasks:
- API endpoint
- Email template
- UI form
- Tests
- QA validation`
    },
    'agile-acceptance-criteria': {
        title: 'Acceptance Criteria',
        language: 'Process',
        description: 'Clear pass/fail conditions that define when a story is acceptable.',
        code: `Given user is on reset page
When valid email is submitted
Then reset link is sent
And success message is shown`,
        notes: 'Good acceptance criteria reduce rework and handoff confusion.'
    },
    'agile-estimation': {
        title: 'Story Points & Estimation',
        language: 'Process',
        description: 'Teams estimate relative complexity/effort, often using story points and planning poker.',
        code: `Typical point scale:
1, 2, 3, 5, 8, 13

Estimate based on:
- Complexity
- Risk/uncertainty
- Effort`
    },
    'agile-prioritization': {
        title: 'Prioritization',
        language: 'Process',
        description: 'Prioritize by business impact, urgency, dependencies, and implementation cost.',
        code: `Simple approach:
Priority score = (Business impact + urgency) - effort cost

Common methods:
- MoSCoW
- RICE
- WSJF`
    },
    'agile-sprint-goal': {
        title: 'Sprint Goal',
        language: 'Process',
        description: 'A short statement describing the value outcome the sprint should achieve.',
        code: `Example sprint goal:
"Enable first-time users to activate accounts without support help."`,
        notes: 'Sprint goals align story selection and protect focus during execution.'
    },
    'jira-what': {
        title: 'What is Jira?',
        language: 'Tooling',
        description: 'Jira is a work tracking platform for planning, assigning, and monitoring delivery across epics, stories, tasks, and bugs.',
        code: `Jira basics:
- Projects
- Issue types
- Boards
- Backlogs
- Sprints
- Reports`
    },
    'jira-project-setup': {
        title: 'Project Setup',
        language: 'Tooling',
        description: 'Start with a Scrum or Kanban project and define issue types/workflow.',
        code: `Setup checklist:
1) Create project (Scrum/Kanban)
2) Configure issue types
3) Configure workflow statuses
4) Add board columns
5) Invite team members`
    },
    'jira-issue-types': {
        title: 'Issue Types',
        language: 'Tooling',
        description: 'Issue types classify work and affect reporting/flow.',
        code: `Common issue types:
- Epic
- Story
- Task
- Bug
- Sub-task`,
        notes: 'Use consistent issue type semantics across teams.'
    },
    'jira-workflow': {
        title: 'Workflow & Statuses',
        language: 'Tooling',
        description: 'Workflow defines allowed transitions and approval gates.',
        code: `Common statuses:
To Do -> In Progress -> In Review -> QA -> Done`,
        notes: 'Keep status count low; too many statuses slow execution.'
    },
    'jira-boards': {
        title: 'Boards (Scrum/Kanban)',
        language: 'Tooling',
        description: 'Boards visualize work state and bottlenecks.',
        code: `Scrum board:
- Sprint-oriented
- Uses backlog + sprint planning

Kanban board:
- Continuous flow
- WIP limits`
    },
    'jira-sprint-management': {
        title: 'Sprint Management',
        language: 'Tooling',
        description: 'Plan sprint scope, execute, and close with results.',
        code: `Sprint cycle in Jira:
1) Create sprint
2) Move stories from backlog
3) Start sprint (set dates + goal)
4) Update progress daily
5) Complete sprint and carryover unfinished issues`
    },
    'jira-reports': {
        title: 'Reports & Dashboards',
        language: 'Tooling',
        description: 'Use Jira reports to inspect delivery health and predictability.',
        code: `Useful reports:
- Burndown chart
- Velocity chart
- Cumulative flow diagram
- Sprint report
- Control chart`,
        notes: 'Review trends every sprint; use data for process changes, not blame.'
    },
    'jira-video-tutorial': {
        title: 'Beginner Video Tutorial',
        language: 'Video',
        description: 'A starter tutorial for Jira fundamentals.',
        code: `Recommended beginner resource:
Atlassian Answered: Jira Tutorial for Beginners
https://community.atlassian.com/learning/collection/topic/atlassian-answered-jira-tutorial-for-beginners`,
        output: `<div style="display:grid;gap:12px">
            <div style="padding:12px;background:#f8f9fa;border-radius:8px">
                <strong>Watch:</strong> Jira Tutorial for Beginners (Atlassian)
            </div>
            <iframe src="https://www.youtube.com/embed/emidrJeUTaM" title="Jira Tutorial for Beginners" style="width:100%;min-height:320px;border:1px solid #ddd;border-radius:10px" allowfullscreen></iframe>
            <a href="https://community.atlassian.com/learning/collection/topic/atlassian-answered-jira-tutorial-for-beginners" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:10px 14px;background:#667eea;color:#fff;border-radius:8px;text-decoration:none;font-weight:700;width:max-content">Open Atlassian Learning Page</a>
        </div>`,
        notes: 'If the embedded player is blocked in your environment, use the Atlassian learning link above.'
    },

    // ============================================
    // PROMPTING + AI TOOLING EXAMPLES
    // ============================================
    'prompting-star-method': {
        title: 'STAR Prompt Method',
        language: 'Prompting',
        description: 'Use STAR to make your request structured and clear: Situation, Task, Action, Result.',
        code: `Use this template:

Situation:
<Current context, codebase, environment>

Task:
<Exactly what you want done>

Action:
<Constraints, tools, preferences, boundaries>

Result:
<Definition of done + expected output format>`,
        notes: 'STAR reduces ambiguous prompts and improves first-pass success rate.'
    },
    'prompting-agent-request': {
        title: 'How to Ask an Agent',
        language: 'Prompting',
        description: 'Good agent prompts are concrete, scoped, and verifiable.',
        code: `High-quality request pattern:
1) What file(s) to edit
2) Behavior to change
3) Non-goals (what not to touch)
4) Validation command(s)
5) Expected final output

Example:
"Update auth middleware in auth.py to reject expired tokens, keep all route handlers unchanged, and run tests/test_auth.py."`
    },
    'prompting-success-criteria': {
        title: 'Define Success Criteria',
        language: 'Prompting',
        description: 'Always include measurable success criteria so the agent knows when to stop.',
        code: `Example success criteria:
- Tests pass: pytest tests/test_login.py
- UI behavior: error message shown on invalid OTP
- No changes outside: src/auth/*`
    },
    'prompting-context-packet': {
        title: 'Context Packet Template',
        language: 'Prompting',
        description: 'Provide compact but sufficient context before asking for implementation.',
        code: `Context packet:
- Objective
- Relevant files
- Current bug/limitation
- Desired behavior
- Constraints (time, stack, style)
- Validation command`
    },
    'prompting-decomposition': {
        title: 'Task Decomposition',
        language: 'Prompting',
        description: 'Break large requests into smaller dependent tasks to reduce errors.',
        code: `Instead of:
"Build full billing module"

Do:
1) DB schema and migration
2) API endpoints
3) UI integration
4) Tests + docs`
    },
    'prompting-fewshot': {
        title: 'Few-shot Prompting',
        language: 'Prompting',
        description: 'Provide one or two examples of desired output format or coding style.',
        code: `Prompt addition:
"Use this existing function style as reference:
def normalize_user(...): ...

Generate new helpers in same style."`
    },
    'prompting-refinement-loop': {
        title: 'Refinement Loop',
        language: 'Prompting',
        description: 'Use iterative prompts: first draft, critique, then tighten.',
        code: `Loop:
1) "Give first implementation"
2) "Now optimize for readability"
3) "Now add tests for edge cases"
4) "Now summarize changes by file"`
    },
    'prompting-homogeneous': {
        title: 'Homogeneous Prompt Format',
        language: 'Prompting',
        description: 'Use one standard internal prompt format across the team for consistency.',
        code: `Recommended homogeneous format:
[Goal]
[Context]
[Constraints]
[Files]
[Validation]
[Output format]

Benefits:
- Faster reviews
- Better handoffs
- Predictable agent responses`,
        notes: 'If you want, we can enforce this as a mandatory template in onboarding docs.'
    },
    'tooling-google-antigravity': {
        title: 'Google Anti-Gravity Coding IDE',
        language: 'Tooling',
        description: 'Team recommendation: use Google Anti-Gravity coding IDE as your default AI coding workspace.',
        code: `Onboarding recommendation:
1) Install/sign in to Google Anti-Gravity IDE
2) Connect your GitHub account
3) Clone onboarding repository
4) Enable AI coding assistant features
5) Set project formatter/linter defaults`,
        notes: 'If setup fails, contact the engineering onboarding channel for assisted setup.'
    },
    'tooling-google-pro-student': {
        title: 'Google Pro Student Account',
        language: 'Tooling',
        description: 'Onboarding members should use a Google Pro Student account for recommended tool access.',
        code: `Requirement:
- Use Google Pro Student account for onboarding tools

If unavailable:
- Reach out to onboarding/admin team
- We will help arrange access path`,
        notes: 'Include your name, university/company email, and onboarding batch when requesting access help.'
    },
    'tooling-whisper-flow-windows': {
        title: 'Whisper Flow on Windows',
        language: 'Tooling',
        description: 'Use Whisper Flow for speech-to-text prompt drafting while coding.',
        code: `Windows speech-to-prompt workflow:
1) Install Whisper Flow
2) Configure global hotkey
3) Select microphone + language
4) Dictate prompt into IDE/editor
5) Run a quick cleanup pass before send`,
        notes: 'This is recommended as the default voice dictation workflow for faster prompting.'
    },
    'tooling-setup-checklist': {
        title: 'Onboarding Setup Checklist',
        language: 'Checklist',
        description: 'Minimum tooling baseline for new team members.',
        code: `Checklist:
- Git + GitHub access
- Google Anti-Gravity coding IDE
- Google Pro Student account
- Whisper Flow configured on Windows
- Handbook pages bookmarked
- Prompt template copied locally`
    },
    'voice-why-speech-to-text': {
        title: 'Why Speech-to-Text Helps',
        language: 'Workflow',
        description: 'Voice input increases prompt throughput and helps capture ideas while coding.',
        code: `Benefits:
- Faster than typing long prompts
- Better when multitasking/debugging
- Lower friction for iterative prompting`
    },
    'voice-dictation-pattern': {
        title: 'Dictation Prompt Pattern',
        language: 'Workflow',
        description: 'Dictate prompts using structured labels so cleanup is easy.',
        code: `Voice prompt pattern:
"Situation: ...
Task: ...
Action constraints: ...
Result expected: ..."`
    },
    'voice-cleanup-pass': {
        title: 'Cleanup Pass Before Sending',
        language: 'Workflow',
        description: 'Always perform a quick edit pass after dictation.',
        code: `Cleanup checklist:
- Fix file names and function names
- Remove filler words
- Add exact commands/paths
- Confirm desired output format`
    },
    'voice-hotkey-workflow': {
        title: 'Hotkey Workflow',
        language: 'Workflow',
        description: 'Map one hotkey for start/stop dictation and one for paste/send.',
        code: `Recommended workflow:
Hotkey 1: Start/stop dictation
Hotkey 2: Paste transcript in editor
Hotkey 3: Trigger send/submit`
    },
    'rag-ingestion-pipeline': {
        title: 'Ingestion Pipeline',
        language: 'RAG',
        description: 'Build ingestion as a repeatable pipeline so new content can be indexed safely and consistently.',
        code: `Pipeline stages:
1) Source sync (PDFs, docs, DB rows, pages)
2) Normalize text + strip noise
3) Split into chunks
4) Create embeddings
5) Upsert into vector store
6) Record source + version metadata`
    },
    'rag-chunking-strategy': {
        title: 'Chunking Strategy',
        language: 'RAG',
        description: 'Chunk size and overlap directly impact retrieval precision and answer completeness.',
        code: `Baseline:
- chunk_size: 400 to 800 tokens
- overlap: 10 to 20%

Heuristic:
- Use smaller chunks for FAQs/reference docs
- Use larger chunks for narrative docs`
    },
    'rag-embeddings-basics': {
        title: 'Embeddings Basics',
        language: 'RAG',
        description: 'Embeddings map text to vectors so semantically similar texts are close in vector space.',
        code: `# Pseudocode
emb = embedding_model.embed(text_chunk)
vector_db.upsert({
  id: chunk_id,
  vector: emb,
  text: chunk_text,
  metadata: { source, section, updated_at }
})`
    },
    'rag-metadata-filtering': {
        title: 'Metadata & Filtering',
        language: 'RAG',
        description: 'Store metadata with each chunk to enforce tenant boundaries, recency, and content-type constraints.',
        code: `filters = {
  tenant_id: "acme",
  doc_type: "policy",
  updated_at_gte: "2026-01-01"
}

results = vector_db.search(query_vec, top_k=20, filter=filters)`
    },
    'rag-vector-search': {
        title: 'Vector Similarity Search',
        language: 'RAG',
        description: 'Use ANN vector search to retrieve the nearest semantic chunks for a user query.',
        code: `query_vec = embed(user_query)
candidates = vector_db.search(
  vector=query_vec,
  top_k=25
)

# Later reduce to top N for generation
selected = candidates[:8]`
    },
    'rag-hybrid-search': {
        title: 'Hybrid Search',
        language: 'RAG',
        description: 'Combine BM25 keyword search with vector search to improve recall on exact terms and entities.',
        code: `vector_hits = vector_db.search(query_vec, top_k=30)
keyword_hits = bm25.search(user_query, top_k=30)

merged = reciprocal_rank_fusion(vector_hits, keyword_hits)
final_hits = merged[:10]`
    },
    'rag-reranking': {
        title: 'Reranking',
        language: 'RAG',
        description: 'Use a reranker model to improve ordering quality before passing context to the LLM.',
        code: `# Cross-encoder reranking
scored = reranker.score_pairs(
  query=user_query,
  passages=candidate_chunks
)
top_context = sort_by_score_desc(scored)[:6]`
    },
    'rag-query-rewrite': {
        title: 'Query Rewriting',
        language: 'RAG',
        description: 'Rewrite ambiguous user queries into retrieval-friendly forms using entities and intent.',
        code: `Rewrite rules:
- expand acronyms
- include product/version names
- convert pronouns to explicit entities

Example:
"how to reset it?"
-> "How to reset API keys in Project Atlas admin console?"`
    },
    'rag-context-windowing': {
        title: 'Context Assembly',
        language: 'RAG',
        description: 'Assemble retrieved chunks within a strict token budget and preserve chunk order/source.',
        code: `MAX_CONTEXT_TOKENS = 5000
context = []
budget = 0

for chunk in reranked_chunks:
  t = estimate_tokens(chunk.text)
  if budget + t > MAX_CONTEXT_TOKENS:
    break
  context.append(chunk)
  budget += t`
    },
    'rag-grounded-prompting': {
        title: 'Grounded Prompting',
        language: 'RAG',
        description: 'Prompt the LLM to answer only from provided context and explicitly state when evidence is missing.',
        code: `System:
"Answer only using CONTEXT.
If context is insufficient, say 'I don't have enough context.'
Do not invent facts."

User:
Question + retrieved context blocks`
    },
    'rag-citation-format': {
        title: 'Citation Formatting',
        language: 'RAG',
        description: 'Return answers with source IDs/snippets so users can verify claims quickly.',
        code: `Answer format:
1) Short answer
2) Supporting points
3) Citations: [doc_id#section], [doc_id#section]

Example citation:
[employee_handbook_v4#leave-policy]`
    },
    'rag-fallback-handling': {
        title: 'Fallback Behavior',
        language: 'RAG',
        description: 'Define deterministic fallback behavior when retrieval confidence is low.',
        code: `if top_score < 0.42:
  return {
    answer: "I do not have enough verified context.",
    action: "ask_clarifying_question",
    suggestion: "Please specify product, version, and exact issue."
  }`
    },
    'rag-metrics-baseline': {
        title: 'RAG Metrics Baseline',
        language: 'Evaluation',
        description: 'Track retrieval and answer metrics before tuning prompts or models.',
        code: `Core metrics:
- Recall@k
- MRR / NDCG
- Groundedness score
- Citation accuracy
- Answer latency (p50/p95)
- Cost per response`
    },
    'rag-eval-dataset': {
        title: 'Eval Dataset',
        language: 'Evaluation',
        description: 'Create a fixed benchmark set of realistic questions with expected supporting documents.',
        code: `Eval set structure:
- question_id
- user_question
- expected_doc_ids
- expected_answer_traits
- difficulty_tag

Run this set on every index or prompt change.`
    },
    'rag-observability': {
        title: 'Observability',
        language: 'Ops',
        description: 'Log retrieval and generation traces so regressions can be detected and debugged quickly.',
        code: `Per request log:
- rewritten_query
- retrieved_doc_ids + scores
- reranker_scores
- final_prompt_tokens
- model_output
- latency + cost`
    },
    'rag-deployment-checklist': {
        title: 'Deployment Checklist',
        language: 'Ops',
        description: 'Ship RAG changes safely with versioning, rollback, and evaluation gates.',
        code: `Go-live checklist:
- index version tagged
- eval suite passed
- fallback thresholds validated
- prompt version tracked
- canary rollout enabled
- rollback command tested`
    }

};

// Export examples for use in main page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = examples;
}
