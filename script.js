 // Captura o referer da página anterior
 const referrer = document.referrer;        
        
 // Faz uma requisição ao backend
 fetch('https://backend-test-sable.vercel.app/api/count', {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         'Origin': referrer, // Cabeçalho Referer
         'Url' : window.location.href
     }
 })        