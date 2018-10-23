import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './jsonData';
import '../style.css';
import ProductList from './ProductList';
import NavBar from './NavBar';
import ContactBilling from './ContactBilling';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            tabIndex: 1,
            productInfo: {
                rowList: [
                    {
                        id: 0,
                        modelList: [],
                        deploymentOptionList: [],
                        productId: null,
                        deploymentOptionId: null,
                        modelId: null,
                        quantity: '',
                        selectedModelPrice: null,
                        rowTotalPrice: 0,
                        isProductSelected: false
                    }
                ],
                productList: jsonData.productList,
                totalPrice: 0
            }
        };
    }

    toggleTab(e) {
        e.preventDefault();
        let self = this.state;
        const newTabIndex = parseInt(e.target.getAttribute('data-tab-index'));
        self.tabIndex = newTabIndex;

        this.setState(self);
    }

    render() {
        return (
            <div>
            <NavBar tabIndex={this.state.tabIndex} toggleTab={this.toggleTab} />
            <hr/>
            {
                this.state.tabIndex === 1 ? (
                    <ProductList productInfo={this.state.productInfo} />
                ) : (
                    <ContactBilling />
                )
            }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
