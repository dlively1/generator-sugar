<?php


$manifest = array (
    'acceptable_sugar_flavors' => array('CE', 'PRO', 'CORP', 'ENT', 'ULT'),
    'acceptable_sugar_versions' => array(
        'regex_matches' => array ('7\\.(.*?)\\.(.*?)','7\\.(.*?)\\.(.*?)\\.(.*?)'),
    ),
    'readme'=>'',
    'author' => '<%= packageAuthor %>',
    'description' => '<%= packageDescription %>',
    'icon' => '',
    'is_uninstallable' => true,
    'name' => '<%= packageName %>',
    'published_date' => '<%= today %>',
    'type' => 'module',
    'version' => '<%= packageVersion %>',
    'remove_tables' => 'prompt',
);

$installdefs = array (
    'id' => '<%= packageName %>',
    // build -- start \\
    'copy' => array (
        0 => array (
            'from' => '<basepath>/custom',
            'to' => 'custom',
        ),
    )
    // build -- end \\
);
