import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.addRow = this.addRow.bind(this);
        this.onProductSelected = this.onProductSelected.bind(this);
        this.deleteRow  = this.deleteRow.bind(this);
        this.onDeploymentOptionSelected = this.onDeploymentOptionSelected.bind(this);
        this.onModelSelected = this.onModelSelected.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.state = props.productInfo;
    }

    onProductSelected(e) {
        if(e.target.value) {
            const productId = parseInt(e.target.value);
            const rowIndex = parseInt(e.target.getAttribute('data-row-index'));
            let self = this.state;
            let row = self.rowList[rowIndex];
            row.productId = productId;
            row.isProductSelected = true;
            this.state.productList.map(productItem => {
                if(productItem.id === productId) {
                    row.modelList = productItem.modelList;
                    row.deploymentOptionList = productItem.deploymentOptionList;
                }
            });

            this.setState(self);
        }
    }

    onDeploymentOptionSelected(e) {
        const deploymentOptionId = parseInt(e.target.value);
        const rowIndex = parseInt(e.target.getAttribute('data-row-index'));
        let self = this.state;
        let row = self.rowList[rowIndex];
        row.deploymentOptionId = deploymentOptionId;
        this.setState(self);
    }

    onModelSelected(e) {
        const modelId = parseInt(e.target.value);
        const rowIndex = parseInt(e.target.getAttribute('data-row-index'));
        const modelPrice = parseInt(e.target.options[e.target.selectedIndex].getAttribute('data-price-value'));
        let self = this.state;
        let row = self.rowList[rowIndex];
        row.modelId = modelId;
        row.selectedModelPrice = modelPrice;
        row.rowTotalPrice = row.quantity * row.selectedModelPrice;
        self.totalPrice = this.calculateTotalPrice(self.rowList);
        this.setState(self);
    }

    deleteRow(e) {
        e.preventDefault();
        const index = parseInt(e.target.getAttribute('data-row-index'));
        let self = this.state;
        let i = 0;
        self.rowList.splice(index, 1); //
        self.rowList.map(rowItem => {
            rowItem.id = i;
            i++;
        });
        self.totalPrice = this.calculateTotalPrice(self.rowList);
        this.setState(self);
     }

    addRow(e) {
        e.preventDefault();
        let self = this.state;
        self.rowList.push({
            id: self.rowList.length,
            modelList: [],
            deploymentOptionList: [],
            productId: null,
            deploymentOptionId: null,
            modelId: null,
            quantity: '',
            selectedModelPrice: null,
            rowTotalPrice: 0,
            isProductSelected: false
        });

        this.setState(self);
    }

    onQuantityChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
            const index = parseInt(e.target.getAttribute('data-row-index'));
            let self = this.state;
            let rowItem = self.rowList[index];
            rowItem.quantity = parseInt(e.target.value);
            if (rowItem.selectedModelPrice) {
                rowItem.rowTotalPrice = rowItem.quantity * rowItem.selectedModelPrice;
                self.totalPrice = this.calculateTotalPrice(self.rowList);
            }

            this.setState(self);
        }
    }

    calculateTotalPrice(rowList) {
        let totalPrice = 0;
        rowList.map(rowItem => {
            totalPrice = totalPrice + rowItem.rowTotalPrice;
        });

        return totalPrice;
    }

    render() {
        console.log(this.state);
        return (
            <div>
            {
                this.state.rowList.map(rowItem => (
                    <div key={rowItem.id} className="panel">
                    <div className="row">
                        <div className="col-md-1">
                            <span className="badge badge-pill badge-secondary">{rowItem.id + 1}</span>
                        </div>
                        <div className="col-md-4">
                            <strong>Select your Product</strong>
                        </div>
                        <div className="col-md-2">
                            <strong>Quantity</strong>
                        </div>
                        <div className="col-md-2 text-center">
                            <strong>Price</strong>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row top-buffer">
                    <div className="col-md-1">
                    </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                Product
                                <br />
                                <select className="form-control" data-row-index={rowItem.id} onChange={this.onProductSelected}>
                                    <option></option>
                                     {
                                     this.state.productList.map(productItem => (
                                     <option key={productItem.id} value={productItem.id}>{productItem.name}</option>
                                    ))
                                    }
                               </select>
                             </div>
                             <div className="form-group">
                                 Deployment Option
                                 <br />
                                 <select className="form-control" data-row-index={rowItem.id} onChange={this.onDeploymentOptionSelected} disabled={!rowItem.isProductSelected}>
                                     <option></option>
                                      {
                                      rowItem.deploymentOptionList.map(deploymentOptionItem => (
                                      <option key={deploymentOptionItem.id} value={deploymentOptionItem.id} selected={deploymentOptionItem.id == rowItem.deploymentOptionId}>{deploymentOptionItem.name}</option>
                                     ))
                                     }
                                </select>
                              </div>
                              <div className="form-group">
                                  Model
                                  <br />
                                  <select className="form-control" data-row-index={rowItem.id} onChange={this.onModelSelected} disabled={!rowItem.isProductSelected}>
                                      <option></option>
                                       {
                                       rowItem.modelList.map(modelItem => (
                                       <option data-price-value={modelItem.price} key={modelItem.id} value={modelItem.id} selected={modelItem.id == rowItem.modelId}>{modelItem.name} (${modelItem.price})</option>
                                      ))
                                      }
                                 </select>
                               </div>
                        </div>
                        <div className="col-md-2 rowLine">
                            <input type="number" className="form-control" data-row-index={rowItem.id} value={rowItem.quantity} onChange={this.onQuantityChange} />
                        </div>
                        <div className="col-md-2 text-center price rowLine">
                        ${rowItem.rowTotalPrice}
                        </div>
                        <div className="col-md-3 rowLine">
                            <button type="button" className="btn btn-danger btn-sm" data-row onClick={this.deleteRow} data-row-index={rowItem.id}>Delete</button>
                        </div>
                    </div>
                    </div>
                ))
            }
            <button type="button" className="btn btn-primary" onClick={this.addRow}>Add another product</button>
            <hr />
            <div className="row">
            <div className="col-md-3 col-md-offset-7 orderTotal">Order Total: <strong>$ {this.state.totalPrice}</strong></div>
            </div>
            </div>
        )
    }
}

ProductList.propTypes = {
    productInfo: PropTypes.object.isRequired
}

export default ProductList;
