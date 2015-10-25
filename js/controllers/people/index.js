var Route = require('../../utils/route'),
    Pikaday = require('../../vendor/pikaday'),
    moment = require('moment'),
    config = {
        templates: {
            index: require('../../views/people/index.bars')
        },
        partials: {
            'top-bar': require('../../views/application/top-bar.bars'),
            'filters': require('../../views/application/filters.bars')
        }
    };

var PeopleIndex = Route.createElement(config, function PeopleIndex(options) {
    var _ = this;
    _.supercreate(options);

    _.fromPicker = new Pikaday({
        field: _.$element.find('[name="from"]')[0],
        firstDay: 1,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });

    _.toPicker = new Pikaday({
        field: _.$element.find('[name="to"]')[0],
        firstDay: 1,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });

    _.set('filters', {
        from: moment().subtract(7, 'days').format('YYYY-MM-D'),
        to: moment().format('YYYY-MM-D')
    });
});

PeopleIndex.definePrototype({
    unload: function unload() {
        var _ = this;

        _.toPicker.destroy();
        _.fromPicker.destroy();
    }
});

module.exports = PeopleIndex;
