import {gql} from "@apollo/client";

// Query
export const QUERY = gql`query ProductList($limit: Int, $sort: SortFindManyProductInput, $filter: FilterFindManyProductInput) {
  viewer {
    productList(limit: $limit, sort: $sort, filter: $filter) {
			_id
      name
      productID
      quantityPerUnit
      unitPrice
    }
  }
}`

// Mutation
export const CREATE_PRODUCT = gql`mutation RemoveProduct($createProductRecord2: CreateOneProductInput!) {
	createProduct(record: $createProductRecord2) {
		record {
			productID
			name
			quantityPerUnit
			unitPrice
		}
	}
}`

export const REMOVE_PRODUCT = gql`mutation Mutation($filter: FilterRemoveOneProductInput) {
  removeProduct(filter: $filter) {
    record {
      productID
    }
  }
}`

export const UPDATE_PRODUCT = gql`mutation UpdateProduct($id: MongoID!, $updateProductRecord2: UpdateByIdProductInput!) {
  updateProduct(_id: $id, record: $updateProductRecord2) {
    record {
      productID
      _id
    }
  }
}`