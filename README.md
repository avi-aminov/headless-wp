### Headless CMS
WordPress includes db data and plugins ready for testing

**Backend**
docker-compose, wordpress, apache, php, mysql, phpmyadmin

Run WordPress
    
       cd docker-wordpress
	   docker-compose up -d
	   
	   Open in browser
	   http://127.0.0.1:8880/wp-admin/
	
    


**FrontEnd**
ReactJS, axios, styled-components

Run FrontEnd
	
       cd frontend
	   npm install
	   npm run dev
	   
	   Open in browser
	   http://localhost:5173/
    