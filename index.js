    const btnCart = document.querySelector('.container-cart-icon')

    const containerCartProducts = document.querySelector('.container-cart-products')

    btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle
    ('hidden-cart')
    })

    /*........*/
    const cartinfo = document.querySelector('.cart-product')
    const rowProduct = document.querySelector('.row-product')

    /*lista de los contenedores de productos*/
    const productsList =document.querySelector('.container-items')

    /*variables*/
    let allproducts = []

    const valorTotal = document.querySelector('.total-pagar')

    const countProducts = document.querySelector(`#contador-productos`)

    productsList.addEventListener('click', e => {
        
        if(e.target.classList.contains('btn-add-cart')){
            const product = e.target.parentElement;

            const infoProduct = {
                quantify: 1,
                title: product.querySelector('h2').textContent,
                price: product.querySelector('p').textContent,
            };

            const exits = allproducts.some(
                product => product.title === infoProduct.title
                );
            
            if (exits){
                const product = allproducts.map(product => {
                    if(product.title === infoProduct.title){
                        product.quantify++;
                        return product
                    } else{
                        return product
                    }
                })
                allProducts = [...product]
            } else{
                allproducts = [...allproducts,infoProduct];
            }

            
                
            showHTML();
        }

        console.log(allproducts)

    })

    rowProduct.addEventListener(`click`, (e) => {
        if(e.target.classList.contains('icon-close')){
            const product = e.target.parentElement
            const title = product.querySelector('p').textContent

            allproducts = allproducts.filter( 
                product => product.title !== title
                );
                
                console.log(allProducts)
                showHTML()
        }
    })


    // funcion para mostrar HTML
    const showHTML = () => {

        if(!allproducts.length){
            containerCartProducts.innerHTML=`
            <p class="cart-empty">El carrito esta vacio</p>

            `

            
        }
        //limpiarhtml
        
        rowProduct.innerHTML = '';

        let total = 0;
        let totalofProducts = 0;

        allproducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product')
        
        containerProduct.innerHTML = `
        <div class="info-cart-product">
        <span class="cantidad-producto-carrito">${product.quantify}</span>
        <p class="titulo-producto-carrito">${product.title}</p>
        <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="icon-close">
        <path stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M6 18L18 6M6 6l12 12" />
    </svg>
    `;


    rowProduct.append(containerProduct);

    total = 
        total + parseInt(product.quantify * product.price.slice(1));
    totalofProducts = totalofProducts + product.quantify;

    });
    
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalofProducts;

    };
    