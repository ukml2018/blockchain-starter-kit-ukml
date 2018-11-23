/**
* transaction processor function.
* @param {org.example.mynetwork.updatepipeTransaction} txParms
* @transaction
*/
/*eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
    }
}]*/
/*eslint strict: [2, "never"]*/
async function updpipeTxfn(txParms) {
    console.log('Here1');
    // Save the old value of the pipe.
    const oldLat = txParms.pipe.latitude;
    const oldLong = txParms.pipe.longitude;
    const oldTime = txParms.pipe.insert_timestamp;
    console.log('Here2');
    // Update the pipe data with the new value.
    txParms.pipe.latitude = txParms.newLatitude;
    txParms.pipe.longitude = txParms.newLongitude;
    txParms.pipe.insert_timestamp = txParms.newInsert_timestamp;
    console.log('Here3');
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.mynetwork.pipeLocate');
    // Update the asset in the asset registry.
    await assetRegistry.update(txParms.pipe);
    console.log('Here4');
    // Emit an event for the modified asset.
    let myevent = getFactory().newEvent('org.example.mynetwork', 'SampleEvent');
    myevent.pipe = txParms.pipe.pipeId;
    myevent.oldLatitude = oldLat;
    myevent.oldLongitude = oldLong;
    myevent.oldInsert_timestamp = oldTime;
    myevent.newLatitude = txParms.newLatitude;
    myevent.newLongitude = txParms.newLongitude;
    myevent.newInsert_timestamp = txParms.newInsert_timestamp;
    emit(myevent);
}