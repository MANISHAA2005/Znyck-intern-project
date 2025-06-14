const mongoose = require('mongoose') ;

const Tableschema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        minlength : [3 , 'atleast 3 characters long'],
        required : [true,'Name is required']
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    feilds : [
        {
            feildName : {
                type : String,
                trim : true,
                minlength : [1 , 'atleast 1 feild is required'],
                required : [true,'Name is required']
            },
            feildType : {
                type : String,
                required : [true,'type is required'],
                enum : [
                    'Text','Number','Date','Mail','Created Time',
                    'Modified Time','Formula','Single select','Multi seclect',
                    'User','URL','Mobile number','Checkbox'
                ]
            },
            options : {
                type : [String],
                required : function() {
                    return this.feildType === 'Single select' || this.feildType === 'Multi select';
                }
            },
            defaultVal : mongoose.Schema.Types.Mixed
        }
    ],
    data : {
        type : mongoose.Schema.Types.Mixed,
        default : []
    }
},
{
    timestamps : true
}
);

const Table = mongoose.model('Table',Tableschema);
module.exports = Table;