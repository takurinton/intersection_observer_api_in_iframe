const element = document.getElementById('hoge');
const shadowRoot = element.attachShadow({mode: 'closed'});

shadowRoot.innerHTML = `
<p style="position: fixed" id="body-content"></p>
<div id="box1" class="hoge" style="margin: 100px; height: 500px; width: 300px; background-color: aqua;"><p class="content"></p></div>
<div id="box2" class="hoge" style="margin: 100px; height: 500px; width: 300px; background-color: aqua;"><p class="content"></p></div>
<div id="box3" class="hoge" style="margin: 100px; height: 500px; width: 300px; background-color: aqua;"><p class="content"></p></div>
<div id="box4" class="hoge" style="margin: 100px; height: 500px; width: 300px; background-color: aqua;"><p class="content"></p></div>
<div id="box5" class="hoge" style="margin: 100px; height: 500px; width: 300px; background-color: aqua;"><p class="content"></p></div>
<script async defer src="index.js"></script>
<script async defer src="body.js"></script>
`;