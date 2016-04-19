// Generated on 2014-01-10 using generator-angular-fullstack 1.1.1
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.initConfig({   
  cssmin: {
    combine: {
    files: {
      'dist/theme.css': ['css/theme.css']
    }
    }
  },
  clean: ["admFrontApp.zip"],  
  compress: {
    main: {
     options: {
       archive: 'admFrontApp.zip'
     },
      files: [
        { expand: true, cwd: 'app/', src: ['**', '!node_modules'], dest: '/'},
        { src: ['bower.json'], dest: '/'}
      ]}
    }
  });
   
  grunt.registerTask('mavenpom', function () {
   var bowerJson = grunt.file.readJSON('bower.json');
   grunt.log.writeln('Determined project version: ' + bowerJson.version);
  
   var pom = '<?xml version="1.0" encoding="UTF-8"?>\n' +
     '<project xmlns="http://maven.apache.org/POM/4.0.0"' +
     ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
     ' xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n' +
     '  <modelVersion>4.0.0</modelVersion>\n' +
     '	<parent>\n '+
     '	  	<groupId>com.ng.adm</groupId>\n '+
     '		<artifactId>niograph-adm</artifactId>\n '+
     '		<version>1.0-SNAPSHOT</version>\n '+
     '	</parent>\n '+
     '  <groupId>ng.admission.bower</groupId>\n' +
     '  <artifactId>adm-front</artifactId>\n' +
     '  <packaging>pom</packaging>\n' +
     '  <name>front (Angular)</name>\n'+
     '  <version>' + bowerJson.version + '</version>\n' +
     '  <build>\n' +
     '    <plugins>\n' +
     '      <plugin>\n' +
     '        <groupId>org.codehaus.mojo</groupId>\n' +
     '        <artifactId>build-helper-maven-plugin</artifactId>\n' +
     '        <version>1.8</version>\n' +
     '        <executions>\n' +
     '          <execution>\n' +
     '            <id>attach-artifacts</id>\n' +
     '            <phase>package</phase>\n' +
     '            <goals>\n' +
     '              <goal>attach-artifact</goal>\n' +
     '            </goals>\n' +
     '            <configuration>\n' +
     '              <artifacts>\n' +
     '                <artifact>\n' +
     '                  <file>admFrontApp.zip</file>\n' +
     '                   <type>zip</type>\n' +
     '                </artifact>\n' +
     '              </artifacts>\n' +
     '            </configuration>\n' +
     '          </execution>\n' +
     '        </executions>\n' +
     '      </plugin>\n' +
     '    </plugins>\n' +
     '  </build>\n' +
     '</project> ';
  
   grunt.log.writeln('Writing pom.xml');
   grunt.file.write('pom.xml', pom);
  });
   
  grunt.registerTask('default', [
    'cssmin',
    'clean',
    'compress',
    'mavenpom'
  ]);
};
