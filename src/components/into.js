<div className="grid-container">
      {productos.map((producto) => {
        return (
          <div key={producto.id} className="item">
            <div className={"genero"}>
              <p>{producto.genero}</p>
            </div>
            <div>
              <img className="img" src={producto.portada} alt="" />
            </div>
            <div className="nombre">
              <a href="">{producto.title}</a>
            </div>
            <button className="boton">comprar</button>
            <p className="precio">1000</p>
            <Link to={"/" + producto.id}>ver mas</Link>
          </div>
          /*<ItemList productos={productos}></ItemList>*/
        );
      })}
    </div> 
    

    "../datosPeliculas.json"