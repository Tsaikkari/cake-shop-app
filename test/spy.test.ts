const formUtils = {
  submitForm: function(formData: object) {
    console.log(formData)
  }
}

function productEditView(name: string, price: number, color: 'red' | 'blue') {
  const product = {
    name,
    price,
    color,
  }
}