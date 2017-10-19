/**
 *
 */
export class Broker {

    /*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
    /**
     *
     */
    public static path: string;

    /*-------------------------------------------------------------------
	 *				 		     BEHAVIORS
	 *-------------------------------------------------------------------*/

    /**
     *
     */
    public static of(serviceName: string): ServiceProxy {

        if ( !window['dwr'] ) {
            throw new Error('The DWR engine.js must be included in the main html.');
        }

        return new ServiceProxy(serviceName);
    }
}

/**
 *
 */
export class ServiceProxy {

    /*-------------------------------------------------------------------
     *                           ATTRIBUTES
     *-------------------------------------------------------------------*/
    /**
     *
     */
    private serviceName: string;

    /*-------------------------------------------------------------------
     *                           CONSTRUCTOR
     *-------------------------------------------------------------------*/
    /**
     *
     */
    public constructor(serviceName: string) {
        this.serviceName = serviceName;
    }

    /*-------------------------------------------------------------------
     *                           BEHAVIORS
     *-------------------------------------------------------------------*/
    /**
     *
     */
    public promise(methodName: string, ...args): Promise<any> {

        return new Promise<any>((resolve, reject) => {

            const callback = {
                callback: result => {
                    resolve(result);
                },
                errorHandler: (message, exception) => {
                    console.error(exception);
                    reject(new Error(message));
                }
            };

            if ( args == null ) {
                args = [];
            }

            args.push(callback);

            window['dwr'].engine._execute(Broker.path, this.serviceName, methodName, args);
        });
    }
}
