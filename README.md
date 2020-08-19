<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Pyo_twitch_chat_0"></a>Pyo twitch chat</h1>
<p class="has-line-data" data-line-start="2" data-line-end="4">Very old and basic code for the bot ‘pyo’.<br>
Idk why you’d want to use this, but you do whatever</p>
<h1 class="code-line" data-line-start=5 data-line-end=6 ><a id="Install_5"></a>Install</h1>
<pre><code class="has-line-data" data-line-start="8" data-line-end="12" class="language-sh">$ npm i tmi.js
&amp;&amp;
$ npm i electron
</code></pre>
<h1 class="code-line" data-line-start=13 data-line-end=14 ><a id="Example_of_packagejson_13"></a>Example of package.json</h1>
<pre><code class="has-line-data" data-line-start="16" data-line-end="36" class="language-sh">{
  <span class="hljs-string">"name"</span>: <span class="hljs-string">"pyo-twitch-chat"</span>,
  <span class="hljs-string">"version"</span>: <span class="hljs-string">"1.0.0"</span>,
  <span class="hljs-string">"description"</span>: <span class="hljs-string">""</span>,
  <span class="hljs-string">"main"</span>: <span class="hljs-string">"main.js"</span>,
  <span class="hljs-string">"scripts"</span>: {
    <span class="hljs-string">"test"</span>: <span class="hljs-string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span>,
    <span class="hljs-string">"start"</span>: <span class="hljs-string">"electron ."</span>
  },
  <span class="hljs-string">"author"</span>: <span class="hljs-string">"sheba"</span>,
  <span class="hljs-string">"license"</span>: <span class="hljs-string">"ISC"</span>,
  <span class="hljs-string">"devDependencies"</span>: {
    <span class="hljs-string">"electron"</span>: <span class="hljs-string">"^9.2.1"</span>
  },
  <span class="hljs-string">"dependencies"</span>: {
    <span class="hljs-string">"electron-builder"</span>: <span class="hljs-string">"^22.8.0"</span>,
    <span class="hljs-string">"tmi.js"</span>: <span class="hljs-string">"^1.5.0"</span>
  }
}
</code></pre>
<h1 class="code-line" data-line-start=37 data-line-end=38 ><a id="Running_37"></a>Running</h1>
<pre><code class="has-line-data" data-line-start="39" data-line-end="41" class="language-sh">$ npm start
</code></pre>
