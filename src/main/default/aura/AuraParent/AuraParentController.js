/**
 * Created by bjohnson on 2/1/24.
 */

({

    handleMessage: function (component, event){
        console.log('handled')
        var msg = event.getParam('message');
        component.set("v.message", msg)
    }
});