const acym_helperSelect2 = {
    initJsSelect2: function () {
        acym_helperSelect2.setSelect2();
        acym_helperSelect2.setAjaxSelect2();
        acym_helperSelect2.setSelect2Email();
        acym_helperSelect2.setSelect2ChooseTagsGlobal();
        acym_helperSelect2.setSelect2SortBy();
    },
    setSelect2: function () {
        jQuery('.acym__select:not([acym-data-infinite])')
            .select2({
                theme: 'foundation',
                width: '100%',
            });

        jQuery('.acym__select[acym-data-infinite]')
            .select2({
                theme: 'foundation',
                width: '100%',
                minimumResultsForSearch: Infinity,
            });

        jQuery('.intext_select')
            .select2({
                theme: 'foundation',
                minimumResultsForSearch: Infinity,
            });
    },
    setSelect2SortBy: function () {
        jQuery('#acym__listing__ordering')
            .select2({
                theme: 'sortBy',
                minimumResultsForSearch: Infinity,
            });
    },
    setAjaxSelect2: function () {
        jQuery('.acym_select2_ajax').each(function () {
            let $placeholder = jQuery(this).attr('data-placeholder');
            if (!$placeholder) $placeholder = '- - -';

            let ctrl = jQuery(this).attr('data-ctrl');
            if (!ctrl) ctrl = 'dynamics';
            let task = jQuery(this).attr('data-task');
            if (!task) task = 'trigger';

            let defaultOption = jQuery(this).attr('acym-data-default');

            let searchParams = {
                'ctrl': ctrl,
                'task': task,
            };

            let dataParams = jQuery(this).attr('data-params');
            if (dataParams) {
                let decodedParams = JSON.parse(dataParams);
                Object.assign(searchParams, decodedParams);
            }

            let dataMin = jQuery(this).attr('data-min');
            if (!dataMin) dataMin = 3;

            jQuery(this).select2({
                theme: 'foundation',
                ajax: {
                    url: ACYM_AJAX_URL,
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        searchParams.search = params.term;
                        return searchParams;
                    },
                    processResults: function (data) {
                        let options = [];
                        if (undefined !== defaultOption && (searchParams.search === '' || undefined === searchParams.search)) {
                            options.push({
                                id: 0,
                                text: defaultOption,
                            });
                        }
                        if (data) {
                            jQuery.each(data, function (index, text) {
                                options.push({
                                    id: text[0],
                                    text: text[1],
                                });
                            });
                        }
                        return {
                            results: options,
                        };
                    },
                    cache: true,
                },
                minimumInputLength: dataMin,
                width: '100%',
                allowClear: true,
                placeholder: $placeholder,
            });


            let dataSelected = jQuery(this).attr('data-selected');
            if (dataSelected && dataSelected > 0) {
                let url = ACYM_AJAX_URL + '&ctrl=' + ctrl + '&task=' + task + '&id=' + encodeURIComponent(dataSelected);
                let $currentSelect2 = jQuery(this);

                jQuery.get(url, function (response) {
                    response = acym_helper.parseJson(response);
                    let newOption = new Option(response.text, response.value, false, false);
                    $currentSelect2.append(newOption);
                });
            }
        });
    },
    setSelect2Email: function () {
        let $emailsField = jQuery('.acym__multiselect__email');
        let searchParams = {
            'ctrl': 'campaigns',
            'task': 'searchTestReceivers',
        };

        $emailsField.select2({
            width: '100%',
            placeholder: $emailsField.attr('placeholder'),
            tags: true,
            tokenSeparators: [
                ' ',
                ',',
                ';',
            ],
            createTag: function (params) {
                let term = jQuery.trim(params.term);
                if (!acym_helper.emailValid(term)) {
                    return null;
                }

                return {
                    id: term,
                    text: term,
                };
            },
            ajax: {
                url: ACYM_AJAX_URL,
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    searchParams.search = params.term;
                    return searchParams;
                },
                processResults: function (data) {
                    let options = [];
                    if (data) {
                        jQuery.each(data, function (index, text) {
                            let value = text[0];
                            if ($emailsField.length > 1) {
                                value = text[1];
                            }
                            options.push({
                                id: value,
                                text: text[1],
                            });
                        });
                    }
                    return {
                        results: options,
                    };
                },
            },
            minimumInputLength: 3,
        });
    },
    setSelect2ChooseTagsGlobal: function () {
        let $selectMultipleTags = jQuery('#acym__tags__field');
        let $placeholderSelect = $selectMultipleTags.attr('placeholder');

        $selectMultipleTags.select2({
            width: '100%',
            placeholder: $placeholderSelect,
            tags: true,
            tokenSeparators: [' '],
            createTag: function (params) {
                let term = jQuery.trim(params.term);

                if (term === '') {
                    return null;
                }

                return {
                    id: 'acy_new_tag_' + term,
                    text: term,
                    newTag: true,
                };
            },
        });
    },
};
