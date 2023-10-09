type Action = { type: 'ADD_TODO'; payload: {text: string } } | 
              { type: 'DELETE_TODO'; payload: {id: number } } |
              { type: 'TOGGLE_TODO'; payload: {id: number } }

export default Action;