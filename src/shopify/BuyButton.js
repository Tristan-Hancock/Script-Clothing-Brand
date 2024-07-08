import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import collections from '../data/collections';
import '../styles/buybutton.css'; // Ensure you have the CSS file

const BuyButton = () => {
  const { id } = useParams();
  const product = collections.find(item => item.id === parseInt(id));
  const buttonRef = useRef(null);
  const initialized = useRef(false); // Track if the button is initialized

  useEffect(() => {
    if (!product || initialized.current) return;

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const scriptId = 'shopify-buy-button-script';

    const loadScript = () => {
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.src = scriptURL;
        document.body.appendChild(script);
        script.onload = () => ShopifyBuyInit(product.shopifyId);
      } else if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        ShopifyBuyInit(product.shopifyId);
      }
    };

    const ShopifyBuyInit = (productId) => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI && buttonRef.current) {
        const client = window.ShopifyBuy.buildClient({
          domain: '208a7e-88.myshopify.com',
          storefrontAccessToken: '57fbefc81a157db83597a2dc2b401e6e',
        });
        window.ShopifyBuy.UI.onReady(client).then((ui) => {
          if (!buttonRef.current.hasChildNodes()) {
            ui.createComponent('product', {
              id: productId,
              node: buttonRef.current,
              moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0",
                        "margin-bottom": "50px"
                      },
                      "text-align": "left"
                    },
                    "title": {
                      "font-size": "26px"
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "border-radius": "12px",
                      "font-size": "18px",  // Increase font size
                      "padding": "15px 30px" // Increase padding
                    },
                    "price": {
                      "font-size": "18px"
                    },
                    "compareAt": {
                      "font-size": "15.299999999999999px"
                    },
                    "unitPrice": {
                      "font-size": "15.299999999999999px"
                    }
                  },
                  "layout": "horizontal",
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "description": true
                  },
                  "width": "100%",
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "border-radius": "12px"
                    },
                    "title": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "bold",
                      "font-size": "26px",
                      "color": "#4c4c4c"
                    },
                    "price": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "18px",
                      "color": "#4c4c4c"
                    },
                    "compareAt": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.299999999999999px",
                      "color": "#4c4c4c"
                    },
                    "unitPrice": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.299999999999999px",
                      "color": "#4c4c4c"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "border-radius": "12px"
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  },
                  "popup": false
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "background-color": "#000000",
                      ":hover": {
                        "background-color": "#000000"
                      },
                      ":focus": {
                        "background-color": "#000000"
                      }
                    }
                  }
                }
              }
            });
          }
        });
      }
      initialized.current = true;
    };

    loadScript();
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-container">
    <div className="product-frame">
      <div className="product-details-section">
        <div ref={buttonRef} id={`product-component-${product.shopifyId}`}></div>
      </div>
    </div>
  </div>
  );
};

export default BuyButton;
