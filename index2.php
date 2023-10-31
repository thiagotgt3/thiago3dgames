<?php
/**
 * @package GameMonetize.com CMS - Modern Arcade Script
 *
 * @author GameMonetize.com
 */
if (!isset($_GET['p'])) $_GET['p'] = 'home';

require_once dirname(__FILE__) . '/gm-load.php';

require_once ABSPATH . 'assets/index/header_tags.php';
require_once ABSPATH . 'assets/index/header.php';
require_once ABSPATH . 'assets/index/footer.php';
require_once ABSPATH . 'assets/index/page.php';

// A partir daqui, você pode inserir seu código JavaScript entre as tags </head>
?>


<link rel="manifest" href="appmanifest.json">
<link rel="shortcut icon" sizes="256x256" href="32.png" />
</head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4043765559226642" crossorigin="anonymous"></script>
<body>
<?php
echo \GameMonetize\UI::view('index');

$GameMonetizeConnect->close();
?>
