<?php

if (! isset($hook_array) || ! is_array($hook_array))
{
    $hook_array = array();
}

if (! isset($hook_array['<%=hookType%>'])
    || ! is_array($hook_array['<%=hookType%>']))
{
    $hook_array['<%=hookType%>'] = array();
}
$hook_array['<%=hookType%>'][] = Array(
    <%=hookIndex%>,
    '<%=hookDescription%>',
    '<%=classPath%>',
    '<%=className%>',
    '<%=method%>',
);