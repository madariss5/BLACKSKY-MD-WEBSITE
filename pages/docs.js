import { useState } from 'react';
import Layout from '../components/Layout';
import FAQ from '../components/FAQ';
import { FaBook, FaCode, FaRocket, FaTools, FaGamepad } from 'react-icons/fa';

// Documentation sections
const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <FaRocket className="w-6 h-6 text-accent" />,
    content: `
      <h3 class="text-2xl font-bold mb-4">Getting Started with BlackSky-MD</h3>
      <p class="mb-4">Welcome to BlackSky-MD! This guide will help you get up and running with your own WhatsApp bot.</p>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Requirements</h4>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Node.js 16.x or higher</li>
        <li>Git</li>
        <li>A WhatsApp account</li>
        <li>Basic knowledge of terminal/command line</li>
      </ul>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Installation Steps</h4>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Clone the repository: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">git clone https://github.com/your-username/blacksky-md.git</code></li>
        <li>Navigate to the project directory: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">cd blacksky-md</code></li>
        <li>Install dependencies: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm install</code></li>
        <li>Start the bot: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm start</code></li>
        <li>Scan the QR code with your WhatsApp to log in</li>
      </ol>
      
      <p class="mb-4">That's it! Your BlackSky-MD bot should now be connected to your WhatsApp account.</p>
    `
  },
  {
    id: 'commands',
    title: 'Bot Commands',
    icon: <FaCode className="w-6 h-6 text-accent" />,
    content: `
      <h3 class="text-2xl font-bold mb-4">Bot Commands</h3>
      <p class="mb-4">BlackSky-MD comes with a wide range of built-in commands. Here are some of the most commonly used ones:</p>
      
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-dark-secondary rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="py-3 px-4 text-left">Command</th>
              <th class="py-3 px-4 text-left">Description</th>
              <th class="py-3 px-4 text-left">Usage</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="py-3 px-4 text-primary dark:text-white">.help</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">Display available commands</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">.help [command]</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-primary dark:text-white">.profile</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">View your RPG profile</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">.profile</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-primary dark:text-white">.inventory</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">Check your inventory</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">.inventory</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-primary dark:text-white">.addplugin</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">Add a new plugin to the bot</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">.addplugin [plugin code]</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-primary dark:text-white">.delplugin</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">Remove a plugin from the bot</td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-300">.delplugin [plugin name]</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p>For a complete list of commands, use the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.help</code> command in your WhatsApp chat with the bot.</p>
    `
  },
  {
    id: 'plugins',
    title: 'Plugin Development',
    icon: <FaTools className="w-6 h-6 text-accent" />,
    content: `
      <h3 class="text-2xl font-bold mb-4">Plugin Development</h3>
      <p class="mb-4">BlackSky-MD has a powerful plugin system that allows you to extend its functionality. Here's how to create your own plugins:</p>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Plugin Structure</h4>
      <p class="mb-4">A basic plugin file should have the following structure:</p>
      
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-6"><code>let handler = async (m, { conn, text, args, command, usedPrefix }) => {
  // Your plugin code here
  
  // Example: Send a message
  m.reply('Hello from my custom plugin!');
}

// Set command properties
handler.help = ['command_name']
handler.tags = ['category']
handler.command = /^(command_name)$/i

export default handler</code></pre>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Adding Your Plugin</h4>
      <p class="mb-4">To add your plugin to BlackSky-MD, you can use one of these methods:</p>
      
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Save the plugin file in the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">plugins</code> directory with a <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.js</code> extension</li>
        <li>Use the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.addplugin</code> command in WhatsApp, followed by the plugin code</li>
      </ol>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Plugin Persistence</h4>
      <p class="mb-4">BlackSky-MD includes a database system to ensure your plugins persist across restarts, especially useful for Heroku deployments.</p>
    `
  },
  {
    id: 'rpg-system',
    title: 'RPG System',
    icon: <FaGamepad className="w-6 h-6 text-accent" />,
    content: `
      <h3 class="text-2xl font-bold mb-4">RPG System</h3>
      <p class="mb-4">BlackSky-MD includes a comprehensive RPG system that adds gaming elements to your WhatsApp groups.</p>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Character Creation</h4>
      <p class="mb-4">Users can create and customize their characters with various attributes and abilities.</p>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Progression System</h4>
      <p class="mb-4">Characters gain experience points (XP) through various activities:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Chatting in groups</li>
        <li>Completing quests and missions</li>
        <li>Participating in events and challenges</li>
        <li>Winning in minigames</li>
      </ul>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Economy System</h4>
      <p class="mb-4">The RPG system includes a virtual economy with:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Currency (Bargeld) that can be earned and spent</li>
        <li>Banking system (Bankkonto) for safe storage</li>
        <li>Shops to buy items and upgrades</li>
        <li>Trading between players</li>
      </ul>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Activities</h4>
      <p class="mb-4">Players can engage in various activities:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Mining for resources</li>
        <li>Fishing for rare items</li>
        <li>Hunting for experience and loot</li>
        <li>Crafting items from gathered materials</li>
        <li>Adventuring on quests and missions</li>
      </ul>
    `
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: <FaBook className="w-6 h-6 text-accent" />,
    content: `
      <h3 class="text-2xl font-bold mb-4">Troubleshooting</h3>
      <p class="mb-4">Having issues with BlackSky-MD? Here are solutions to common problems:</p>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Connection Issues</h4>
      <p class="mb-4">If you're having trouble connecting to WhatsApp:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Make sure you have a stable internet connection</li>
        <li>Delete the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">sessions</code> folder and try connecting again</li>
        <li>Check if your WhatsApp is up to date</li>
        <li>Ensure you're not running multiple instances of WhatsApp (web or otherwise)</li>
      </ul>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Plugin Loading Issues</h4>
      <p class="mb-4">If plugins aren't loading properly:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Check for syntax errors in your plugin code</li>
        <li>Try using the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.syncplugins</code> command to refresh from the database</li>
        <li>Check the console for error messages</li>
      </ul>
      
      <h4 class="text-xl font-semibold mb-2 mt-6">Heroku Specific Issues</h4>
      <p class="mb-4">For issues related to Heroku deployment:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Make sure you've set up the PostgreSQL database correctly</li>
        <li>Check if your environment variables are properly configured</li>
        <li>Examine the Heroku logs for any error messages</li>
        <li>Consider upgrading your dyno plan if you're experiencing performance issues</li>
      </ul>
      
      <p class="mb-4">If you're still experiencing issues, visit our GitHub repository to open an issue or join our Discord community for support.</p>
    `
  }
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <Layout title="Documentation - BlackSky-MD Bot">
      <div className="pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-primary dark:text-white mb-8 text-center">
            Documentation
          </h1>

          {/* Documentation navigation tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {docSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>

          {/* Documentation content */}
          <div className="bg-white dark:bg-dark-secondary shadow-md rounded-lg p-6 md:p-8 mb-12">
            {docSections.map((section) => (
              <div
                key={section.id}
                className={activeSection === section.id ? 'block' : 'hidden'}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ))}
          </div>

          {/* FAQ Section */}
          <FAQ />
        </div>
      </div>
    </Layout>
  );
}