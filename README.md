# 🌾 Node-Farm - A Pure Node.js Learning Project  
**A minimalist farm product website built entirely with core Node.js** to demonstrate fundamental backend concepts without any frameworks.  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)  

## 🚀 Key Features  
- **Pure Node.js Implementation** - No Express or other frameworks  
- **Dynamic Content Serving** - HTML pages generated with real-time data  
- **Core Concept Demonstration**:  
  - Native HTTP server creation  
  - File system operations (JSON/HTML)  
  - URL routing and query parsing  
  - Custom template engine  
- **Educational Focus** - Perfect for understanding Node.js fundamentals  

## 📂 Project Structure  
```
node-farm/
├── dev-data/
│   ├── data.json        # Product database
│   └── test.txt        # Test file
├── modules/
│   └── replaceTemplate.js # Template engine
├── templates/
│   ├── template-card.html     # Product card template
│   ├── template-overview.html # Overview page template
│   └── template-product.html  # Product detail template
├── index.js            # Main server file
└── README.md           # Documentation
```  

## 🛠️ Installation & Usage  
### Prerequisites  
- Node.js 18.x or higher  

### Quick Start  
```bash
git clone https://github.com/EslamOmar5012/Node-Farm.git
cd Node-Farm
node index.js
```  
Server will start on port `8000`. Open [http://localhost:8000](http://localhost:8000) in your browser.  

## 🌐 Available Routes  
| Route | Description | Example |
|-------|-------------|---------|
| `/` or `/overview` | Product listing page | [http://localhost:8000](http://localhost:8000) |
| `/product?id=<id>` | Product detail page (0-based index) | [http://localhost:8000/product?id=0](http://localhost:8000/product?id=0) |
| `/api` | Raw JSON product data | [http://localhost:8000/api](http://localhost:8000/api) |
| Any other path | 404 Not Found page | [http://localhost:8000/not-found](http://localhost:8000/not-found) |  

## 🧠 Learning Outcomes  
This project covers essential Node.js concepts:  
1. **Server Creation**  
```javascript
const server = http.createServer((req, res) => {...});
```  
2. **File System Operations**  
```javascript
fs.readFile('./templates/template-overview.html', 'utf-8', (err, data) => {...});
```  
3. **URL Parsing**  
```javascript
const { query, pathname } = url.parse(req.url, true);
```  
4. **Template Engine**  
```javascript
const replaceTemplate = (temp, product) => {...};
```  

## 📚 Educational Resources  
Inspired by [Jonas Schmedtmann's "Node.js Bootcamp"](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/). Recommended for deeper Node.js understanding.  

## 👨‍💻 Author  
**Eslam Omar**  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/EslamOmar5012)  
