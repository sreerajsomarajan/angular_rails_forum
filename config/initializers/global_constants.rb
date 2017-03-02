#
# Constants of the app.
#
# @author [DevSree]
#

API_ACTION_FAILED = 'Some action has been failed'.freeze

# Path of config
CONFIG_PATH = "#{Rails.root}/config/".freeze

# Path of messages folder
MSG_PATH = "#{CONFIG_PATH}/messages/".freeze

# Status codes yaml
STATUS_CODE = YAML.load_file(CONFIG_PATH + 'status_codes.yml')
                  .deep_symbolize_keys
