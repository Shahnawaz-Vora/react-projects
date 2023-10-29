# useContext

* React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

# useReducer

* The useReducer method gives you a state variable and a dispatch method to make state changes. 

* You can define state in the following way: <br>
```javascript
const [state, dispatch] = useReducer(reducerMethod, initialValue)
``` 
* The reducer method contains your state logic. You can choose which state logic to call using the dispatch method.

**Note: using ...variable is used to maintain the state of multiple variable other one show and all gone**

**Note: we can pass reducer dispatch method also in provider consumer value attribute**

# useCallback
* The React useCallback Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render.

# useMemo

* useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)

# Difference between useMemo and useCallback

* the main difference between useCallback and useMemo is the type of value they return. useCallback returns a memoized callback function, while useMemo returns a memoized value.
* useCallback is used to cut the load of function whereas useMemo is use to cut the value load

**Note:In useCallback project we use memo and useCallback to render one function at a time and not other components . And inUseMemo project counter a slow counter b so we used usememo to not slow counter b**

# useRef

* The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.