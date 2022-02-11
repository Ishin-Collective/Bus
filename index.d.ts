interface Bus<BoundFunctionSignature = () => void, Generic = false> {

    /*
     * Triggers the event which fires all the functions listening to the event.
     * @param args Arguments given are passed to the functions.
     */
    post(...args: FunctionArgument<BoundFunctionSignature>): void;

    /*
     * Sets the function to listen on the event bus.
     * @param callback The function to be called when the event is fired.
     */
    listen<O extends Array<unknown> = FunctionArguments<BoundFunctionSignature>>(
        callback?: Generic extends true
            ? (FunctionArguments<BoundFunctionSignature> extends Array<unknown>
                ? (...args: O) => void : BoundFunctionSignature) : BoundFunctionSignature,
    ): void;
    
    /*
     * Cancels the function on the event bus so it can't be triggered in the future.
     * @param callback The function to be cancelled.
     */
    cancel<O extends Array<unknown> = FunctionArguments<BoundFunctionSignature>>(
        callback?: Generic extends true
            ? (FunctionArguments<BoundFunctionSignature> extends Array<unknown>
                ? (...args: O) => void : BoundFunctionSignature) : BoundFunctionSignature,
    ): void;

}

declare const Bus: new <BoundFunctionSignature = () => void, Generic = false>() => Bus<BoundFunctionSignature, Generic>;
export default Bus;