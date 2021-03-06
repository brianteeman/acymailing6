<?php

use AcyMailing\Libraries\acymPlugin;

class plgAcymSmtp extends acymPlugin
{
    const SENDING_METHOD_ID = 'smtp';
    const SENDING_METHOD_NAME = 'SMTP';

    public function __construct()
    {
        parent::__construct();
        $this->pluginDescription->name = self::SENDING_METHOD_NAME;
    }

    public function onAcymGetSendingMethods(&$data, $isMailer = false)
    {
        if ($isMailer) return;
        $data['sendingMethods'][self::SENDING_METHOD_ID] = [
            'name' => $this->pluginDescription->name,
            'icon' => 'acymicon-email',
        ];
    }

    public function onAcymGetSendingMethodsHtmlSetting(&$data)
    {
        ob_start();
        ?>
		<div id="<?php echo self::SENDING_METHOD_ID; ?>_settings" class="send_settings grid-x cell">
			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
				<label for="smtp_host" class="cell"><?php echo acym_translation('ACYM_SMTP_SERVER'); ?></label>
				<input id="smtp_host" class="cell" type="text" name="config[smtp_host]" value="<?php echo acym_escape($this->config->get('smtp_host')); ?>">
			</div>
			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
				<label for="smtp_port" class="cell"><?php echo acym_translation('ACYM_SMTP_PORT'); ?></label>
				<input id="smtp_port" class="cell" type="text" name="config[smtp_port]" value="<?php echo acym_escape($this->config->get('smtp_port')); ?>">
			</div>
			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
				<label for="smtp_secured" class="cell"><?php echo acym_translation('ACYM_SMTP_SECURE'); ?></label>
				<div class="cell medium-2">
                    <?php
                    $secureMethods = [
                        '' => '- - -',
                        'ssl' => 'SSL',
                        'tls' => 'TLS',
                    ];
                    echo acym_select(
                        $secureMethods,
                        'config[smtp_secured]',
                        $this->config->get('smtp_secured', ''),
                        [
                            'class' => 'acym__select',
                            'acym-data-infinite' => '',
                        ],
                        '',
                        '',
                        'smtp_secured'
                    );
                    ?>
				</div>
			</div>

			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
                <?php echo acym_switch('config[smtp_keepalive]', $this->config->get('smtp_keepalive'), acym_translation('ACYM_SMTP_ALIVE'), [], 'large-2 medium-3 small-9'); ?>
			</div>

			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
                <?php echo acym_switch('config[smtp_auth]', $this->config->get('smtp_auth'), acym_translation('ACYM_SMTP_AUTHENTICATION'), [], 'large-2 medium-3 small-9'); ?>
			</div>
			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
				<label for="smtp_username" class="cell"><?php echo acym_translation('ACYM_SMTP_USERNAME'); ?></label>
				<input id="smtp_username"
					   class="cell"
					   type="text"
					   name="config[smtp_username]"
					   value="<?php echo acym_escape($this->config->get('smtp_username')); ?>">
			</div>
			<div class="cell grid-x acym_vcenter acym__sending__methods__one__settings">
				<label for="smtp_password" class="cell"><?php echo acym_translation('ACYM_SMTP_PASSWORD'); ?></label>
				<input id="smtp_password"
					   class="cell"
					   type="text"
					   name="config[smtp_password]"
					   value="<?php echo str_repeat('*', strlen($this->config->get('smtp_password'))); ?>">
			</div>
			<div id="available_ports">
				<a href="#" id="available_ports_check"><?php echo acym_translation('ACYM_SMTP_AVAILABLE_PORTS'); ?></a>
			</div>
		</div>
        <?php
        $data['sendingMethodsHtmlSettings'][self::SENDING_METHOD_ID] = ob_get_clean();
    }
}
